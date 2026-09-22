"use client";

// "Download (.txt)" builds a plain-text copy of the policy for offline review (e.g. attaching to a
// WhatsApp Business Platform / Meta verification submission); "Print / Save as PDF" uses the browser's
// native print dialog, with @media print hiding the back-link/buttons (see globals.css).
export default function PolicyActions({ containerId, filename, title }) {
  function buildText() {
    const root = document.getElementById(containerId);
    if (!root) return title;
    const updated = root.querySelector('.privacy-updated');
    const body = root.querySelector('.privacy-body');
    const lines = [title, updated ? updated.textContent.trim() : '', ''];
    if (body) {
      body.querySelectorAll('h3, p').forEach((node) => {
        const t = node.textContent.replace(/\s+/g, ' ').trim();
        if (!t) return;
        if (node.tagName === 'H3') { lines.push(''); lines.push(t); }
        else lines.push(t);
      });
    }
    return lines.join('\n');
  }

  function handleDownload() {
    const text = buildText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    function legacySave() {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    // this component is shared with the Claude artifact preview build, where plain download
    // links/blobs are sandboxed — use the "downloads" capability there; on the real deployed
    // site (window.claude absent) fall back to a normal browser download.
    if (typeof window !== 'undefined' && window.claude && typeof window.claude.use === 'function') {
      window.claude.use('downloads').then((downloads) => {
        if (!downloads) { legacySave(); return; }
        downloads.save({ filename, data: blob }).catch(() => {});
      }).catch(legacySave);
    } else {
      legacySave();
    }
  }

  return (
    <div className="privacy-actions">
      <button className="btn ghost sm" type="button" onClick={handleDownload}>Download (.txt)</button>
      <button className="btn ghost sm" type="button" onClick={() => window.print()}>Print / Save as PDF</button>
    </div>
  );
}

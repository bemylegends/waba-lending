import ArticlePage from '@/components/ArticlePage';
import { ARTICLES } from '@/data/knowledge';

const SLUG = 'slop-is-not-bad-work';
const a = ARTICLES.find((x) => x.slug === SLUG);
export const metadata = { title: 'Legends — ' + (a ? a.title : 'Knowledge'), description: a ? a.excerpt : undefined };

export default function Page() {
  return <ArticlePage slug={SLUG} />;
}

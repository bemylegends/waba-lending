import ArticlePage from '@/components/ArticlePage';
import { ARTICLES } from '@/data/knowledge';

const SLUG = 'what-we-mean-when-we-ask-for-ownership';
const a = ARTICLES.find((x) => x.slug === SLUG);
export const metadata = { title: 'Legends — ' + (a ? a.title : 'Knowledge'), description: a ? a.excerpt : undefined };

export default function Page() {
  return <ArticlePage slug={SLUG} />;
}

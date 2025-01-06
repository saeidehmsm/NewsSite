import { getLatestNews } from "../../../../lib/news";
import NewsList from "../../../../components/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <div id="news">
        <NewsList news={latestNews} />
      </div>
    </>
  );
}

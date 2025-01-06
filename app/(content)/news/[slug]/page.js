import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news";

export default function NewsDetailPage({ params }) {
  const slug = params.slug;
  const currentNews = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!currentNews) {
    notFound();
  }
  return (
    <article className="news-detail">
      <header>
        <img
          src={`/images/news/${currentNews.image}`}
          alt={currentNews.title}
        />
        <h1>{currentNews.title}</h1>
        <time dateTime={currentNews.date}>{currentNews.date}</time>
      </header>
      <p>{currentNews.content}</p>
    </article>
  );
}

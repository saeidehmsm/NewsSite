import NewsList from "../../../../../components/news-list";
import { getAvailableNewsMonths, getNewsForYear } from "../../../../../lib/news";
import { getAvailableNewsYears } from "../../../../../lib/news";
import { getNewsForYearAndMonth } from "../../../../../lib/news";

export default function ArchiveYearpage({ params }) {
  let links = getAvailableNewsYears();
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  let news = null;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
   else if (selectedYear && selectedMonth) {
      news = getNewsForYearAndMonth(selectedYear, selectedMonth);
      links=[];
   }

  let content;
  if (news && news.length > 0) {
    content = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <a href={href}>{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {content}
    </>
  );
}

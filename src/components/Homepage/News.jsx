import { useEffect, useState } from "react";
import "./homepage.css";

export default function News() {
  const [news, setNews] = useState("");
  const publishedDate = new Date(news.publishedAt);

  const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

  const formattedDate = publishedDate.toLocaleDateString("en-US", dateOptions);
  const formattedTime = publishedDate.toLocaleTimeString("en-US", timeOptions);

  const formattedDateTime = `${formattedDate} | ${formattedTime}`;
  // console.log(news)
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&sortBy=popularity&apiKey=58912f508bda48d6903b85d16a29b179"
      )
        .then(async (data) => await data.json())
        .then((res) => setNews(res.articles[0]));
    };
    fetchNews();
  }, []);

  return (
    <div className="news">
      <div
        className="news--img"
        style={{
          backgroundImage: `url(${news.urlToImage}) `,
          backgroundSize: "cover",
        }}
      >
        <div className="news--title">
          {news.title}
          <p className="date--time">{formattedDateTime}</p>
        </div>
      </div>
      <div className="news--des">{news.description}</div>
    </div>
  );
}

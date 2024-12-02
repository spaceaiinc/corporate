import { NextResponse } from "next/server";
import Parser from "rss-parser";
import mediumLogo from "@/assets/images/brand/medium.png";
import noteLogo from "@/assets/images/brand/note.png";

const parser = new Parser({
  customFields: {
    item: ["media:thumbnail"],
  },
});

// bgColor: #f3f3f3

export async function GET() {
  const noteFeed = await parser.parseURL("https://note.com/hideyuda/rss");
  const mediumFeed = await parser.parseURL("https://medium.com/feed/@hideyuda");

  const noteArticles = noteFeed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    thumbnail: noteLogo,
    // thumbnail: item["media:thumbnail"] || noteLogo,
  }));
  // 'content:encoded': '<p>This time, I tried to build a web application using “Cloud Load Balancer”, “Cloud Storage”, “Cloud Run”, and “Cloud SQL” of Google Cloud (commonly known as GCP).</p><p>The design was based on the “3-Tier configuration of Web Application + API (SPA)” introduced in the following article by Google Cloud.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/0*cshyIdh1BLOjUTIz" />
  const mediumArticles = mediumFeed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    thumbnail: mediumLogo,
    // thumbnail: item["content:encoded"].match(/src="(.+?)"/)[1] || "/img/medium.jpg",
  }));

  const articles = {
    note: noteArticles,
    medium: mediumArticles,
  };

  return NextResponse.json(articles);
}

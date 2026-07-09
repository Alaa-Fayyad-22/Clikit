/**
 * Starter articles for the Insights section. Replace or expand with your
 * own writing — these are here so the section launches with real content
 * instead of an empty page.
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string; // ISO 8601
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "vanity-metrics-are-costing-you",
    title: "Why vanity metrics are quietly killing your ad budget",
    excerpt:
      "Click-through rate feels good in a dashboard. It doesn't pay your invoices. Here's what to track instead.",
    category: "Performance marketing",
    readTime: "5 min read",
    date: "2026-05-12",
    body: [
      "Most paid accounts are optimized for the wrong number. Click-through rate, impressions and even conversion rate all measure activity — none of them measure whether the business made money.",
      "We've inherited accounts with a 6% CTR and a negative return. The ads were doing exactly what they were optimized to do: get clicked. Nobody had connected the campaign to what those clicks actually cost to acquire, versus what a customer was worth.",
      "The fix isn't complicated, it's just unpopular, because it means admitting some channels — even ones with great-looking dashboards — aren't working. Set a target cost-per-acquisition before you launch anything. Review spend against that number weekly, not monthly. And if a channel can't hit it after a fair testing window, cut it, regardless of how the CTR looks.",
      "Vanity metrics survive because they're comfortable. Revenue metrics are uncomfortable until they're the only ones you trust.",
    ],
  },
  {
    slug: "seo-2026-what-actually-moves-rankings",
    title: "SEO in 2026: what actually moves rankings now",
    excerpt:
      "Keyword stuffing died years ago. Here's what we've seen actually work across dozens of accounts this year.",
    category: "SEO & content",
    readTime: "6 min read",
    date: "2026-04-03",
    body: [
      "Search has changed more in the last two years than in the decade before it. AI-generated summaries now answer a huge share of informational queries directly in the results page — which means ranking for generic, top-of-funnel keywords matters less than it used to.",
      "What still works, consistently: content built around specific, high-intent questions your actual buyers ask. Not '10 tips for X,' but the exact question someone types right before they're ready to buy or book.",
      "Technical health still matters more than most teams assume. Slow load times, broken internal links and duplicate pages quietly cap how much of your good content ever gets seen. We fix the technical foundation before we write a single new page — content poured onto a broken site rarely ranks, no matter how good it is.",
      "The accounts that grew fastest this year weren't the ones publishing the most. They were the ones publishing the most specific content, on a site that loaded fast and pointed search engines to it clearly.",
    ],
  },
  {
    slug: "cost-of-a-rebrand-nobody-asked-for",
    title: "The real cost of a rebrand nobody asked for",
    excerpt:
      "A new logo won't fix a business problem. Here's how to tell if you actually need a rebrand or something else.",
    category: "Brand & design",
    readTime: "4 min read",
    date: "2026-03-19",
    body: [
      "Almost every founder we talk to who wants a rebrand actually has one of three other problems: unclear messaging, a site that's slow or hard to navigate, or a product that's evolved past what the current brand explains.",
      "A rebrand fixes none of these on its own. It's expensive, it takes months, and it resets whatever brand recognition you've already built — for a fresh coat of paint over the same underlying issue.",
      "Before you touch a logo, get specific about what's actually broken. If people don't understand what you sell, that's a copy problem. If they understand it but leave anyway, that's a conversion problem — usually the site, not the brand. If your current identity genuinely doesn't represent who you've become, that's when a rebrand is worth the cost.",
      "We still do full rebrands — sometimes that really is the answer. But we say so only after ruling out the cheaper, faster fixes first.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

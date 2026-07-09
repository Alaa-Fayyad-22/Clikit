/**
 * PLACEHOLDER CONTENT — these are illustrative example case studies, not real
 * clients. Swap these out with actual client names, numbers and stories
 * before this site goes live.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  results: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "northwind-outfitters",
    client: "Northwind Outfitters",
    industry: "Outdoor retail · e-commerce",
    summary:
      "Turned a stagnant paid-search account into their #1 revenue channel in one quarter.",
    results: [
      { label: "ROAS", value: "5.1x" },
      { label: "Revenue from paid", value: "+184%" },
      { label: "Time to profitability", value: "11 weeks" },
    ],
    challenge:
      "Northwind had run paid search for two years with an agency that optimized for click-through rate. Spend kept climbing; profitable revenue didn't. They came to us needing the channel to either pay for itself or get cut.",
    approach: [
      "Rebuilt the account around a target CAC per product line, not a blanket budget",
      "Cut 40% of underperforming keywords in the first two weeks",
      "Rebuilt landing pages for the top five revenue products",
      "Moved reporting from clicks/CTR to weekly profit-per-channel",
    ],
    outcome:
      "By week eleven, paid search was profitable on its own and became Northwind's largest single revenue channel — ahead of email and organic combined.",
  },
  {
    slug: "fenwick-dental-group",
    client: "Fenwick Dental Group",
    industry: "Healthcare · local services",
    summary:
      "Rebuilt their SEO foundation and tripled organic booking requests in six months.",
    results: [
      { label: "Organic traffic", value: "+212%" },
      { label: "Booking requests", value: "3.1x" },
      { label: "Ranking keywords (top 10)", value: "68" },
    ],
    challenge:
      "Fenwick had five locations and a site that ranked for almost nothing beyond their own brand name. Every new patient was coming from paid ads or referrals — organic search brought in close to zero bookings.",
    approach: [
      "Fixed a broken site structure that was hiding location pages from search engines",
      "Built individual, locally-optimized pages for each of the five practices",
      "Published a monthly content calendar answering real patient questions",
      "Cleaned up and standardized local listings across all five locations",
    ],
    outcome:
      "Within six months, four of five locations ranked on page one for their core local searches, and organic became Fenwick's second-largest source of new patient bookings.",
  },
  {
    slug: "loom-and-state",
    client: "Loom & State",
    industry: "DTC apparel",
    summary:
      "A full rebrand and new site that doubled their conversion rate without a traffic increase.",
    results: [
      { label: "Conversion rate", value: "2.2x" },
      { label: "Avg. page load", value: "0.9s" },
      { label: "Cart abandonment", value: "-31%" },
    ],
    challenge:
      "Loom & State had loyal repeat customers but a five-year-old site built on a bloated theme. New visitors bounced before they understood what the brand even was, let alone what to buy.",
    approach: [
      "Rebuilt the brand's visual identity around their actual product — natural fiber basics",
      "Rebuilt the site from scratch for speed, cutting load time by more than half",
      "Simplified navigation from twelve categories down to four",
      "Rewrote product copy to sell fabric and fit, not just features",
    ],
    outcome:
      "The new site launched with no paid promotion and no traffic increase — conversion rate alone more than doubled within the first full month.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

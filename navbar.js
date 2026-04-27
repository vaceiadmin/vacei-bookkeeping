
const LIVE_LINK = "https://vacei.com/en";

const portalSublinks = [
  {
    title:"Client Portal",
    slug:"/portal/client-portal"
  },
  {
    title:"Accounting Portal",
    slug:"/portal/accounting-portal"
  },
  {
    title:"Audit Portal",
    slug:"/portal/audit-portal"
  },
]

const resourcesSublinks =[
  {
    title:"Insights",
    slug:"/resources/insights"
  },
  {
    title:"AI Review",
    slug:"/resources/ai-review"
  },
  {
    title:"How It Works",
    slug:"/resources/how-it-works"
  },
  {
    title:"About VACEI",
    slug:"/resources/about-vacei"
  },
  {
    title:"FAQs",
    slug:"/resources/faqs"
  },
  {
    title:"Contact Us",
    slug:"/resources/contact-us"
  },
  {
    title:"Security & Compliance",
    slug:"/resources/security-compliance"
  },
  {
    title:"CPE & Podcast",
    slug:"/resources/cpe-podcast"
  },
]

const servicesSublinks = [
{
  slug: "/services/accounting-finance",
  title: "Accounting & Finance"
},
{
  slug: "/services/tax-compliance",
  title: "Tax & Compliance"
},
{
  slug: "/services/audit-assurance",
  title: "Audit & Assurance"
},
{
  slug: "/services/corporate-csp-services",
  title: "Corporate & CSP Services"
},
{
  slug: "/services/regulated-licensing",
  title: "Regulated & Licensing"
},
{
  slug: "/services/advisory-growth",
  title: "Advisory & Growth"
},
{
  slug: "/services/company-structure-corporate-changes",
  title: "Company Structure & Corporate Changes"
},
{
  slug: "/services/liquidation-wind-down",
  title: "Liquidation & Wind-Down"
},
{
  slug: "/services/international-business-structuring-expansion",
  title: "International Business Structures"
},
{
  slug: "/services/crypto-digital-assets",
  title: "Crypto & Digital Assets"
},
{
  slug: "/services/audit-readiness",
  title: "Audit Readiness"
},
{
  slug: "/services/group-consolidation",
  title: "Group & Consolidation"
},
{
  slug: "/services/banking-payments-support",
  title: "Banking & Payments Support"
},
{
  slug: "/services/corporate-transactions",
  title: "Corporate Transactions"
}];

const navlinks = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Platform",
    sublinks: portalSublinks,
  },
  {
    title: "Services",
    sublinks: servicesSublinks,
  },
  {
    title: "Partners",
    slug: "/partners",
  },
  {
    title: "Pricing",
    slug: "/pricing",
  },
  {
    title: "Resources",
    sublinks: resourcesSublinks,
  },
];

// Expose for plain HTML usage.
window.VACEI_LIVE_LINK = LIVE_LINK;
window.VACEI_NAVLINKS = navlinks;
window.VACEI_PORTAL_SUBLINKS = portalSublinks;
window.VACEI_SERVICES_SUBLINKS = servicesSublinks;
window.VACEI_RESOURCES_SUBLINKS = resourcesSublinks;

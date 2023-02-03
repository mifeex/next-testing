export const twitterDefaults = [
  { name: "twitter:card", content: "summary" },
  { name: "twitter:site", content: "@BeOn1x" },
  { name: "twitter:image", content: "@/images/promo.jpg" },
];

export const ogDefaults = [
  { name: "og:type", content: "article" },
  { name: "og:image", content: "@/images/promo.jpg" },
  { name: "og:site_name", content: "BeOn1x" },
];

export const seoDefaults = [...twitterDefaults, ...ogDefaults];

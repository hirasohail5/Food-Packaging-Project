export const productsMenu = [
  { label: "New In", href: "/collection?new=true" },
  { label: "Shop All", href: "/collection" },
  { label: "Food Papers", href: "/category/food-papers" },
  { label: "Tissue Papers", href: "/category/tissue-papers" },
  { label: "Cups", href: "/category/cups" },
  { label: "Coffee Bags", href: "/category/coffee-bags" },
  { label: "Boxes", href: "/category/boxes" },
  { label: "Bowls", href: "/category/bowls" },
  { label: "Mailers", href: "/category/mailers" },
  { label: "Tapes", href: "/category/tapes" },
  { label: "Bags", href: "/category/bags" },
  { label: "Stickers", href: "/category/stickers" },
  { label: "Cards", href: "/category/cards" },
  { label: "Stamps", href: "/category/stamps" },
  { label: "Tags", href: "/category/tags" },
  { label: "Pouches", href: "/category/pouches" },
];

// Industries submenu ke items abhi XD mein visible nahi the (collapsed state).
// Jab list mil jaye to yahan add kar dena, MobileMenuBar aur MenuBar automatically use kar lenge.
export const industriesMenu = [];

export const navLinks = [
  { label: "Products", href: "/collection", hasChildren: true, children: productsMenu },
  { label: "Industries", href: "/industry", hasChildren: true, children: industriesMenu },
  { label: "about", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

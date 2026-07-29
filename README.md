# Food Packaging — Header & Banner

## Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Images daalni hain yahan (abhi missing hain, isliye broken dikhega jab tak add na karo):
- `public/images/common/header/logo.webp`
- `public/images/home/banner/bannerDesktop.webp`

Placeholder `.txt` files un folders mein hain jagah dikhane ke liye — image daalne ke baad unhe delete kar dena.

## Structure
```
data/headerMenu/index.js          -> nav links + products/industries menu data
src/components/common/header/     -> Header, Logo, Search, desktop MenuBar, MobileMenuBar
src/components/homeComponents/bannerCom/ -> Hero/Banner section
pages/index.js                    -> dono components ko render karta hai
tailwind.config.mjs                -> "brand-red" color yahan se update karna XD ke exact hex se
```

## Abhi confirm karna hai (XD dekh kar):
1. `tailwind.config.mjs` mein `brand-red` ka exact hex code
2. Desktop ka closed/default navbar state (abhi transparent + logo/search/quote button assume kiya hai)
3. `data/headerMenu/index.js` mein `industriesMenu` array — abhi empty hai, XD mein items mile to add karna

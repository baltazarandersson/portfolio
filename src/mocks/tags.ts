import type { TagKeys, TagType } from "types/tags";

const jsIcon = "images/icons/javascript.svg";
const reactIcon = "images/icons/react.svg";
const styledComponentsIcon = "images/icons/styled-components.png";
const tailwindIcon = "images/icons/tailwind.svg";
const vercelIcon = "images/icons/vercel.svg";
const firebaseIcon = "images/icons/firebase.svg";
const reduxIcon = "images/icons/redux.svg";
const nextIcon = "images/icons/next.svg";
const cypressIcon = "images/icons/cypress.svg";

const tags: Record<TagKeys, TagType> = {
  react: {
    title: "React",
    alt: "react",
    icon: reactIcon,
    source: "https://es.reactjs.org/",
  },
  styled_components: {
    title: "styled-components",
    alt: "styled-components",
    icon: styledComponentsIcon,
    source: "https://styled-components.com/",
  },
  tailwind: {
    title: "Tailwind.css",
    alt: "tailwind",
    icon: tailwindIcon,
    source: "https://tailwindcss.com/",
  },
  vercel: {
    title: "Vercel",
    alt: "vercel",
    icon: vercelIcon,
    iconClass: "dark:invert",
    source: "https://vercel.com/",
  },
  firebase: {
    title: "Firebase",
    alt: "firebase",
    icon: firebaseIcon,
    source: "https://firebase.google.com/",
  },
  redux: {
    title: "Redux",
    alt: "redux",
    icon: reduxIcon,
    source: "https://es.redux.js.org/",
  },
  next: {
    title: "Next.js",
    alt: "next",
    icon: nextIcon,
    iconClass: "dark:invert",
    source: "https://nextjs.org/",
  },
  cypress: {
    title: "Cypress",
    alt: "cypress",
    icon: cypressIcon,
    iconClass: "dark:invert",
    source: "https://www.cypress.io/",
  },
  javascript: {
    title: "javascript",
    alt: "javascript",
    icon: jsIcon,
    source: "https://js.org/index.html",
  },
};

export default tags;

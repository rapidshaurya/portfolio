import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Senior Engineer",
    company_name: "Rapid Innovation",
    icon: edunet, // You may want to add a company logo to assets
    iconBg: "#161329",
    date: "March 2023 - Present",
    points: [
      "Collaborated with 9-person team to develop Xstrela Project marketplace for trading web3 game assets",
      "Implemented Google/Meta OAuth for social media sign-up/sign-in functionality",
      "Developed Admin Service for platform management",
      "Created Quest Service to boost user engagement through rewards system",
      "Built cron service to pull NFT collections from Reservoir API",
      "Implemented WebSocket/webhooks for real-time NFT activity tracking",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Rapid Innovation",
    icon: edunet, // You may want to add a company logo to assets
    iconBg: "#161329",
    date: "August 2022 - March 2023",
    points: [
      "Led backend/desktop development for RapidShot employee monitoring tool",
      "Worked with technologies: Rust, Actix-web, Tauri, MongoDB, HTML/CSS, JavaScript",
    ],
  },
  {
    title: "Rust Intern",
    company_name: "Rapid Innovation",
    icon: edunet, // You may want to add a company logo to assets
    iconBg: "#161329",
    date: "April 2022 - August 2022",
    points: [
      "Developed ToDo list and Linkshare projects",
      "Integrated smart contracts using ether-rs crate",
      "Deployed contracts via Remix on Ganache",
      "Built CLI for Uniswap token exchange",
    ],
  },

 
  
];

export const projects = [
  
];

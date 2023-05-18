// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  { title: "Javascript", src: "/javascript.png" },
  { title: "HTML", src: "/html.png" },
  { title: "CSS", src: "/css.png" },
  { title: "ReactJS", src: "/react.png" },
  { title: "Tailwind-CSS", src: "/tailwind-logo.png" },
  { title: "Webpack", src: "/webpack.png" },
  { title: "Firebase", src: "/firebase.png" },
  { title: "Bootstrap", src: "/boostrap.svg" },
  { title: "Node", src: "/node.png" },
  { title: "ExpressJS", src: "/express.png" },
  { title: "Vite", src: "/vite.png" },
  { title: "NextJS", src: "/next.png" },
  { title: "Sass", src: "/sass.png" },
  { title: "Git", src: "/git.png" },
  { title: "Github", src: "/github.png" },
  { title: "Unity", src: "/unity.png" },
  { title: "VSCode", src: "/vscode.png" },
  { title: "Notion", src: "/notion.png" },
  { title: "Figma", src: "/figma.png" },
  { title: "ElectronJS", src: "/electron.svg" },
  { title: "Typescript", src: "/typescript.png" },
  { title: "UIPath Studio", src: "/uipath.png" },
  { title: "Prisma ORM", src: "/prisma.svg" },
  { title: "MySQL", src: "/MySQL.svg" },
];

export default function handler(req, res) {
  
  res.status(200).json(data);

}



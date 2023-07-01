import Image from "next/image";
import styles from "@/styles/Home.module.scss";

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
    { title: "Framer Motion", src: "/Framer.svg" },
    { title: "MySQL", src: "/MySQL.svg" },
    { title: "NextAuth", src: "/nextauth.svg" },
  ];

export default function Skills(){
    return (
        <>
        {
            !data ?
                    <div className={styles.spinnerborder}><div></div></div> :
                    data.map((x, i)=>(<li title={x.title} key={i} className={styles.domainLogo}><Image src={x.src} alt={x.title} width={100} height={100} /></li>))
        }
        </>
    )
}
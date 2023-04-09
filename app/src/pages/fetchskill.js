import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

const Skills = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/api/skills")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    },[])
    return (
        <>
        {
            !data ? 
                    <div class={styles.spinnerborder}><div></div></div> :
                    data.map((x)=>(<li title={x.title} className={styles.domainLogo}><Image src={x.src} alt={x.title} width={100} height={100} /></li>))
        }
        </>
    )
}
 
export default Skills;
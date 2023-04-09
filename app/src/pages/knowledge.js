import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })
const domine = Poppins({ subsets: ['latin'], weight: '500' })

const Knowledge = () => {
    return ( 
        <>
        <div className={styles.fuller}>
        
        <div className={styles.center }>
            <div className={styles.grid}>
                <a  href='' target="_blank" className={styles.card}>
                    <Image width={100} height={100} src="/project.jpg" />
                    
                </a>
                <a  href='' target="_blank" className={styles.card}>
                    <Image width={100} height={100} src="/project.jpg" />
                    
                </a>
                <a  href='' target="_blank" className={styles.card}>
                    <Image width={100} height={100} src="/project.jpg" />
                    
                </a>
                <a  href='' target="_blank" className={styles.card}>
                    <Image width={100} height={100} src="/project.jpg" />
                    
                </a>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Knowledge;
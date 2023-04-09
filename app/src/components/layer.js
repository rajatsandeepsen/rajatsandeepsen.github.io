import Navbar from '@/components/navbar'
import styles from '@/styles/Home.module.scss'
import Script from 'next/script'
const Layer = ({children}) => {
    return ( <>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" />
        <div className={styles.flexer}>
        <Navbar />
        {children}
        </div>
        </>
     );
}
 
export default Layer;
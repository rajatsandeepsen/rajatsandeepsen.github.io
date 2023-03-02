import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { Domine, Poppins } from 'next/font/google';
import Link from 'next/link';

const domine = Poppins({ subsets: ['latin'], weight: '500' })

const Navbar = () => {
    return ( 
        <nav>
            <div className={styles.description}>
                <Link href="/logo"><Image src="/favicon.ico" alt="Rajat Logo R" width={70} height={70} priority/></Link>
                <Link href="/"><h2 className={domine.className}>Rajat Sandeep</h2></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
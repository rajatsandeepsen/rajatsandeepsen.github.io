import { Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const domine = Poppins({ subsets: ['latin'], weight: '500' })

export default function NotFound() {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.back()
        }, 5000)
    }, [])

  return (
        <>
        <div className={styles.fuller}>
            <div className={styles.center}>
            <section>
            <h1 className={domine.className}>Dude 404</h1>
            <h4 className={domine.className}>Page not Found</h4> <br></br>
            <div className={styles.card}>
            
            <Link href="/"><h4 className={domine.className}> <i className='bi bi-chevron-left'></i> Go Back</h4></Link>
                
            </div>
            </section>
            </div>
        </div>
        </>

  )
}

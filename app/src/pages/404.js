import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'




const inter = Inter({ subsets: ['latin'] })
const domine = Poppins({ subsets: ['latin'], weight: '500' })

export default function NotFound() {
    useEffect(()=>{
        setTimeout(()=>{
            location.href = '/'
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

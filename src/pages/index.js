import { Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Skills from './fetchskill'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const domine = Poppins({ subsets: ['latin'], weight: '500' })

const addClasses = (className) =>  className.split(' ').map(c => styles[c]).join(' ')



export default function Home() {

  return (
    <>
    <Head>
      <title>Rajat Sandeep</title>
    </Head>
        <div className={styles.center }>
        <section>
            <h1 className={domine.className}>Full Stack Developer</h1>
            <p className={domine.className}>Self-taught Designer & Full Stack Web Developer. Artificial Intelligence & Data Science Engineering Student at SJCET Palai</p>
            <h4 className={domine.className}>Tools used so far</h4>
            <p className={domine.className}>[Softwares, Libraries, Languages, Frameworks]</p>
        </section>
          <div className={styles.newgrid}>
              
              <Skills/>
              
              <div className={styles.gridFull}>
                <a href='https://github.com/rajatsandeepsen' className={addClasses("card")}>
                  <h5 className={domine.className}>View my Projects <span><i className='bi bi-chevron-right'></i></span></h5>      
                </a>
                <Link href='/cv' className={addClasses("card shake")}>
                  <h5 className={domine.className}>CV <span><i className='bi bi-lightning-fill'></i></span></h5>      
                </Link>
                <a href='mailto:rajatsandeepsen1839@gmail.com' className={addClasses("card shake")}>
                  <h5 className={domine.className}><span><i className='bi bi-envelope-fill'></i></span></h5>      
                </a>
            </div>

          </div>
          </div>
          <div className={styles.center}>
            <p className={domine.className}>
              Frontend Developer Intern at Gtech-Mulearn | Technical Officer at IEDC SJCET Startup Bootcamp | Co-Tech Lead at UIPath Kerala Student Community | Tensorflow Lead at GDSC SJCET | Ex Web Developer at IEEE SB SJCET
            </p>
          </div>


        <div className={styles.grid}>
          <a
            href="https://github.com/rajatsandeepsen"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
               Github &nbsp;<span><i className='bi bi-github'></i></span>
            </h2>
            <p className={inter.className}>
              I have a lots of projects on Github.
            </p>
          </a>

          <a
          href="https://instagram.com/rajatsandeepsen"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
             Instagram &nbsp;<span><i className='bi bi-instagram'></i></span>
          </h2>
          <p className={inter.className}>
            I do like to share my work progress here.
          </p>
        </a>

        <a
        href="https://twitter.com/rajatsandeepsen"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
           Twitter &nbsp;<span><i className='bi bi-twitter'></i></span>
        </h2>
        <p className={inter.className}>
          I like to share my thoughts & ideas.
        </p>
      </a>

      <a
      href="https://linkedin.com/in/rajatsandeepsen"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
         Linkedin &nbsp;<span><i className='bi bi-linkedin'></i></span>
      </h2>
      <p className={inter.className}>
        Connect with Me. For any work or collaboration.
      </p>
    </a>
        </div>
      </>
  )
}

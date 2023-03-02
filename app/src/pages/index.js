import Head from 'next/head'
import Image from 'next/image'
import { Domine, Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const domine = Poppins({ subsets: ['latin'], weight: '500' })

export default function Home() {
  return (
    
      <main className={styles.main}>
        <div className={styles.description}>
        <Image
        src="/favicon.ico"
        alt="Rajat Logo R"
        width={70}
        height={70}
        priority
        />
        <h2 className={domine.className}>Rajat Sandeep</h2>
        </div>

        <div className={styles.center }>
        <section>
            <h6 className={domine.className}>Core Javascript Lover</h6>
            <h1 className={domine.className}>Full Stack Developer</h1>
            <h4 className={domine.className}>Tools used so far</h4>
        </section>
          <div className={styles.newgrid}>
              <div className={styles.domainLogo}><Image src="/html.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/css.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/javascript.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/react.png" width={90} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/tailwind-logo.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/webpack.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/firebase.png" width={70} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/boostrap.svg" width={85} height={70} /></div>
              <div className={styles.domainLogo}><Image src="/node.png" width={70} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/express.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/vite.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/next.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/vercel.png" width={90} height={90} /></div>
              <div className={styles.domainLogo}><Image src="/sass.png" width={90} height={70} /></div>
              <div className={styles.domainLogo}><Image src="/git.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/github.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/unity.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/vscode.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/notion.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/figma.png" width={80} height={80} /></div>
              <div className={styles.domainLogo}><Image src="/electron.svg" width={100} height={90} /></div>
              
              
          </div>
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
              I been using Github for a while now.<br></br>I have a few projects on Github.
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
            I don't like to showoff<br></br>But I do like to share my work progress.
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
          New to the twitter world. <br></br>But I like to share my thoughts on it.
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
        I been using Linkedin for a while now.<br></br> Connect with Me.
      </p>
    </a>
        </div>
      </main>
    
  )
}

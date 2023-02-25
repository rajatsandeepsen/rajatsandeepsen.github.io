import Head from 'next/head'
import Image from 'next/image'
import { Domine, Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const domine = Poppins({ subsets: ['latin'], weight: '500' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajat Sandeep</title>
        <meta name="description" content="Redirection Page" />
        <meta property="og:image" content="https://github.com/rajatsandeepsen/rajatsandeepsen/blob/main/main.png?raw=true" />
        <meta property="og:title" content="Rajat Sandeep" />
        <meta property="og:description" content="Rajat Sandeep's Landing Page" />
        <meta property="og:url" content="https://rajatsandeepsen.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rajat Sandeep" />
        <meta property="og:locale" content="en_US" />
        <meta name="keywords" content="Rajat Sandeep, Rajat, Rajat Sandeep Sen, sjcet, sjcetpalai, precepter, presept" />
        <meta name="author" content="Rajat Sandeep" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />

      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        <Image
        src="/rajat.png"
        alt="Rajat Logo R"
        width={70}
        height={70}
        priority
        />
        <h2 className={domine.className}>Rajat Sandeep</h2>
        </div>

        <div className={styles.center }>
        <section>
            <h6 className={domine.className}>(not yet)</h6>
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
    </>
  )
}

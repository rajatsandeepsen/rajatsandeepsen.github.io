import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })
const domine = Poppins({ subsets: ['latin'], weight: '500' })

const addClasses = (className) =>  className.split(' ').map(c => styles[c]).join(' ')
const data=[{"title":"Javascript","src":"/javascript.png"},{"title":"HTML","src":"/html.png"},{"title":"CSS","src":"/css.png"},{"title":"ReactJS","src":"/react.png"},{"title":"Tailwind-CSS","src":"/tailwind-logo.png"},{"title":"Webpack","src":"/webpack.png"},{"title":"Firebase","src":"/firebase.png"},{"title":"Bootstrap","src":"/boostrap.svg"},{"title":"Node","src":"/node.png"},{"title":"ExpressJS","src":"/express.png"},{"title":"Vite","src":"/vite.png"},{"title":"NextJS","src":"/next.png"},{"title":"Vercel","src":"/vercel.png"},{"title":"Sass","src":"/sass.png"},{"title":"Git","src":"/git.png"},{"title":"Github","src":"/github.png"},{"title":"Unity","src":"/unity.png"},{"title":"VSCode","src":"/vscode.png"},{"title":"Notion","src":"/notion.png"},{"title":"Figma","src":"/figma.png"},{"title":"ElectronJS","src":"/electron.svg"}]

export default function Home() {
  return (
    <>
        <div className={styles.center }>
        <section>
            <h1 className={domine.className}>Full Stack Developer</h1>
            <h4 className={domine.className}>Tools used so far</h4>
            
        </section>
          <div className={styles.newgrid}>

              {data.map((x)=>{
                return <div title={x.title} className={styles.domainLogo}><Image src={x.src} width={100} height={100} /></div>  
              })}
              
              <div className={styles.gridFull}>
              <div className={addClasses("card")}>
                <h5 className={domine.className}>View my Projects <span><i className='bi bi-chevron-right'></i></span></h5>      
              </div>
              <div className={addClasses("card shake")}>
                <h5 className={domine.className}>Contact Me <span><i className='bi bi-lightning-fill'></i></span></h5>      
              </div>
              <div className={addClasses("card shake")}>
                <h5 className={domine.className}><span><i className='bi bi-envelope-fill'></i></span></h5>      
              </div>
            </div>

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
      </>
  )
}

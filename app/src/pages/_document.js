import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'
export default function Document() {
  return (
    <Html lang="en">
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
      <link rel="short icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />

      </Head>
      <body>
      <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

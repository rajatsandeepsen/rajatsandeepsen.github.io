import { Html,Head, Main, NextScript } from 'next/document'
import AllMeta from 'next/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Rajat Sandeep</title>
        <AllMeta/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="short icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

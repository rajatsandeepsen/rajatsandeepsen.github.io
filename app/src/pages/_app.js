import '@/styles/globals.scss'
import Layer from '@/components/layer'

export default function App({ Component, pageProps }) {
  return (
    <Layer>
      <Component {...pageProps} />
    </Layer>
  )
  
}

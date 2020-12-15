import { ReactElement } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }): ReactElement {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp

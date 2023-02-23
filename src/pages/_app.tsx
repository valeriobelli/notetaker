import type { AppType } from 'next/app'
import '../ui/styles/globals.css'

const App: AppType = ({ Component, pageProps }) => <Component {...pageProps} />

export default App

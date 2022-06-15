import * as React from 'react'
import { withModalTheme } from '@mattjennings/react-modal'
import Meta from '../components/meta'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import '../public/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={withModalTheme(theme)}>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

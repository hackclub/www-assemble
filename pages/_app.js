import * as React from 'react'
import { withModalTheme } from '@mattjennings/react-modal'
import Meta from '../components/meta'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import '../public/global.css'
import { useEatSterEgg } from '../components/eat-ster-egg'

const App = ({ Component, pageProps }) => {
  useEatSterEgg()

  return (
    <ThemeProvider theme={withModalTheme(theme)}>
      <Meta />
      <Component {...pageProps} />
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}
      </style>
    </ThemeProvider>
  )
}

export default App

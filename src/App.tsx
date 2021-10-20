import { ThemeProvider } from 'styled-components'

import { Row } from './components'

import { theme, GlobalStyle } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Row width='100vw' height='100vh' bg='black'></Row>
    </ThemeProvider>
  )
}

export default App

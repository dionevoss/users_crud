import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const theme: DefaultTheme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175'
  }
}

export { GlobalStyle, theme }

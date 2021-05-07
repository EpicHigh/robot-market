import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline } from '@material-ui/core'
import {
  ThemeProvider as MuiThemeProvider,
  Theme as MaterialUITheme,
} from '@material-ui/core/styles'
import { FC } from 'react'
import { theme, globalCss } from '../styles'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MaterialUITheme {}
}

const ThemeProvider: FC = (props) => {
  const { children } = props

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalCss} />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider

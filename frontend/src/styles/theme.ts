import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const fonts = [
  'Lato',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
]

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: fonts.join(','),
    },
  })
)

export default theme

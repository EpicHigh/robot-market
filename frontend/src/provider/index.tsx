import { FC } from 'react'
import { CartProvider } from './CartProvider'
import { DialogProvider } from './DialogProvider'
import ThemeProvider from './ThemeProvider'

const CoreProvider: FC = (props) => {
  const { children } = props

  return (
    <ThemeProvider>
      <CartProvider>
        <DialogProvider>{children}</DialogProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

export default CoreProvider

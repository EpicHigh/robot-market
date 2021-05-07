import { useTheme } from '@emotion/react'
import { FC } from 'react'
import { actHook, renderHook } from '../utils/test-utils'
import ThemeProvider from './ThemeProvider'

describe('ThemeProvider', () => {
  it('should provide material ui theme utils to emotion library', () => {
    const wrapper: FC = ({ children }) => (
      <ThemeProvider>{children}</ThemeProvider>
    )
    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.breakpoints.up('md')).toBe('@media (min-width:960px)')
  })
})

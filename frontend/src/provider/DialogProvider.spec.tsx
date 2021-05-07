import { FC } from 'react'
import { actHook, renderHook } from '../utils/test-utils'
import { DialogProvider, useDialog } from './DialogProvider'

describe('DialogProvider', () => {
  it('should open the dialog', () => {
    const wrapper: FC = ({ children }) => (
      <DialogProvider>{children}</DialogProvider>
    )
    const { result } = renderHook(() => useDialog(), { wrapper })

    actHook(() => {
      result.current.openDialog('foo')
    })

    expect(result.current.state.description).toBe('foo')
    expect(result.current.state.open).toBe(true)
    expect(result.current.state.title).toBe('Oops! something went wrong')
  })

  it('should close the dialog', () => {
    const wrapper: FC = ({ children }) => (
      <DialogProvider>{children}</DialogProvider>
    )
    const { result } = renderHook(() => useDialog(), { wrapper })

    actHook(() => {
      result.current.closeDialog()
    })

    expect(result.current.state.description).toBe('')
    expect(result.current.state.open).toBe(false)
    expect(result.current.state.title).toBe('Oops! something went wrong')
  })
})

import '@testing-library/jest-dom'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import CoreProvider from '../provider'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: CoreProvider, ...options })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { act as actHook, renderHook } from '@testing-library/react-hooks'
export { customRender as render }

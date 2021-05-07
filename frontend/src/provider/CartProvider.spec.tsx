import { FC } from 'react'
import mockRobot from '../mocks/robot'
import { actHook, renderHook } from '../utils/test-utils'
import { CartProvider, useCart } from './CartProvider'

describe('CartProvider', () => {
  it('should add robot to the cart', () => {
    const wrapper: FC = ({ children }) => (
      <CartProvider>{children}</CartProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper })

    actHook(() => {
      result.current.addRobot(mockRobot[0])
      result.current.addRobot(mockRobot[1])
    })

    expect(result.current.robotsCount).toBe(2)
    expect(result.current.items[0].stock).toBe(1)
    expect(result.current.items[1].stock).toBe(1)
  })

  it('should remove robot from the cart', () => {
    const wrapper: FC = ({ children }) => (
      <CartProvider>{children}</CartProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper })

    actHook(() => {
      result.current.addRobot(mockRobot[0])
      result.current.addRobot(mockRobot[1])
      result.current.removeRobot(mockRobot[0])
    })

    expect(result.current.robotsCount).toBe(1)
  })

  it('should clear item from the cart', () => {
    const wrapper: FC = ({ children }) => (
      <CartProvider>{children}</CartProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper })

    actHook(() => {
      result.current.addRobot(mockRobot[0])
      result.current.addRobot(mockRobot[1])
      result.current.clearCart()
    })

    expect(result.current.robotsCount).toBe(0)
  })

  it('should return correct total price', () => {
    const wrapper: FC = ({ children }) => (
      <CartProvider>{children}</CartProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper })

    actHook(() => {
      result.current.addRobot(mockRobot[0])
      result.current.addRobot(mockRobot[1])
    })

    expect(result.current.totalPrice).toBe(575.62)
  })
})

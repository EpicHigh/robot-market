import { useReducer, useContext, createContext, FC } from 'react'
import { cartReducer } from '../reducers'
import { CartActionType, CartRobot, Robot } from '../types'

interface CartContextValue {
  items: CartRobot[]
  lineItemsCount: number
  addRobot: ({ stock, ...rest }: CartRobot) => void
  removeRobot: ({ stock, ...rest }: CartRobot) => void
  clearCart: () => void
  robotsCount: number
  totalPrice: number
  isInCart: (id: string) => boolean
}

const CartContext = createContext<CartContextValue | null>(null)

export const useCart = (): CartContextValue =>
  useContext(CartContext) as CartContextValue

interface CartProviderProps {
  initialCart?: Robot[]
}

export const CartProvider: FC<CartProviderProps> = ({
  children,
  initialCart = [],
}) => {
  const [state, dispatch] = useReducer(cartReducer, { items: initialCart })

  const addRobotHandler = ({ ...rest }: Robot) => {
    dispatch({ type: CartActionType.AddItem, payload: { ...rest, stock: 1 } })
  }

  const removeRobotHandler = ({ stock = 1, ...rest }: Robot) => {
    dispatch({ type: CartActionType.RemoveItem, payload: { ...rest, stock } })
  }

  const getRobotsCount = state.items.reduce((acc, item) => acc + item.stock, 0)

  const getTotalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.stock,
    0
  )

  const clearCartHandler = () => {
    dispatch({ type: CartActionType.ClearCart })
  }

  const isInCart = (id: string) => state.items.some((robot) => robot.id === id)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        lineItemsCount: state.items.length,
        robotsCount: getRobotsCount,
        addRobot: addRobotHandler,
        removeRobot: removeRobotHandler,
        clearCart: clearCartHandler,
        totalPrice: getTotalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

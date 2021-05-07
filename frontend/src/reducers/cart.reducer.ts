import produce from 'immer'
import { CartAction, CartActionType, CartRobot, CartState } from '../types'

const addItem = (state: CartState, action: CartAction): CartRobot[] => {
  if (action?.payload) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload?.id
    )
    if (existingItemIndex > -1) {
      return produce(state.items, (draftState) => {
        draftState[existingItemIndex].stock += 1
        draftState[existingItemIndex].isOutOfStock =
          action.payload?.isOutOfStock || false
        draftState[existingItemIndex].index = action.payload?.index
      })
    }
    return produce(state.items, (draftState) => {
      if (action.payload) {
        draftState.push(action.payload)
      }
    })
  }
  return [...state.items]
}

const removeItem = (state: CartState, action: CartAction): CartRobot[] => {
  return state.items.reduce((acc: CartRobot[], item) => {
    if (item.id === action.payload?.id) {
      const newQuantity = item?.stock !== 0 ? item?.stock - 1 : 0
      const newIsOutOfStock = action.payload?.isOutOfStock || false

      return newQuantity > 0
        ? [
            ...acc,
            {
              ...item,
              stock: newQuantity,
              isOutOfStock: newIsOutOfStock,
            },
          ]
        : [...acc]
    }
    return [...acc, item]
  }, [])
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.AddItem:
      return { items: addItem(state, action) }
    case CartActionType.RemoveItem:
      return { items: removeItem(state, action) }
    case CartActionType.ClearCart:
      return { items: [] }
    default:
      return { items: [] }
  }
}

export default cartReducer

import { Robot } from './robot'

export enum CartActionType {
  AddItem = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
  ClearCart = 'CLEAR_CART',
}

export interface CartRobot extends Robot {
  isOutOfStock?: boolean
  index?: number
}

export type CartState = { items: CartRobot[] }

export interface CartAction {
  type: CartActionType
  payload?: CartRobot
}

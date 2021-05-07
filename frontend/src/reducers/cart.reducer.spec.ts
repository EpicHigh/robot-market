import mockRobot from '../mocks/robot'
import { CartActionType } from '../types'
import cartReducer from './cart.reducer'

describe('cartReducer', () => {
  it('should add robot to cart', () => {
    const index = 0
    const result = cartReducer(
      { items: [] },
      {
        type: CartActionType.AddItem,
        payload: { ...mockRobot[index], index },
      }
    )
    expect(result.items).toEqual([
      {
        name: 'Alexandrine Aufderhar',
        image: 'https://robohash.org/Alexandrine Aufderhar.png?size=120x120',
        price: 354.17,
        stock: 4,
        createdAt: '3/28/2021',
        material: 'plastic',
        id: '2c3d6c29-2a63-4d7c-a86c-0fd324fa7cf2',
        index: 0,
      },
    ])
  })

  it('should remove robot from cart', () => {
    const index = 0
    const result = cartReducer(
      { items: [mockRobot[index]] },
      {
        type: CartActionType.RemoveItem,
        payload: { ...mockRobot[index], index },
      }
    )

    expect(result.items).toEqual([
      {
        name: 'Alexandrine Aufderhar',
        image: 'https://robohash.org/Alexandrine Aufderhar.png?size=120x120',
        price: 354.17,
        stock: 3,
        createdAt: '3/28/2021',
        material: 'plastic',
        id: '2c3d6c29-2a63-4d7c-a86c-0fd324fa7cf2',
        isOutOfStock: false,
      },
    ])
  })

  it('should clear robot from cart', () => {
    const index = 0
    const result = cartReducer(
      { items: [mockRobot[index]] },
      {
        type: CartActionType.ClearCart,
      }
    )

    expect(result.items).toEqual([])
  })
})

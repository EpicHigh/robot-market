import mockRobot from '../mocks/robot'
import { render } from '../utils/test-utils'
import CartList from './CartList'

describe('CartList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CartList
        addToCart={jest.fn}
        removeFromCart={jest.fn}
        robot={{ ...mockRobot[0], isOutOfStock: false }}
      />
    )
    expect(baseElement).toBeInTheDocument()
  })

  it('should disabled plus button', () => {
    const { queryByTestId } = render(
      <CartList
        addToCart={jest.fn}
        removeFromCart={jest.fn}
        robot={{ ...mockRobot[0], isOutOfStock: true }}
      />
    )
    const increase = queryByTestId('increase')
    expect(increase).toBeDisabled()
  })
})

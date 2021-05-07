import mockRobot from '../mocks/robot'
import { render } from '../utils/test-utils'
import Drawer from './Drawer'

describe('Drawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Drawer
        open
        addToCart={jest.fn}
        removeFromCart={jest.fn}
        robots={mockRobot}
        robotsCount={2}
        totalPrice={99999.99}
      />
    )

    expect(baseElement).toBeInTheDocument()
  })
  it('should have text content following the robot count props', () => {
    const { queryByTestId } = render(
      <Drawer
        open
        addToCart={jest.fn}
        removeFromCart={jest.fn}
        robots={mockRobot}
        robotsCount={3}
        totalPrice={99999.99}
      />
    )
    const robotCount = queryByTestId('robotsCount')
    const count = robotCount?.querySelector('span')
    expect(count).toHaveTextContent('3')
  })
  it('should have total price be in Thai Baht formatted, ฿5,300.00', () => {
    const { queryByTestId } = render(
      <Drawer
        open
        addToCart={jest.fn}
        removeFromCart={jest.fn}
        robots={mockRobot}
        robotsCount={3}
        totalPrice={99999.99}
      />
    )
    const totalPrice = queryByTestId('totalPrice')
    expect(totalPrice).toHaveTextContent('฿99,999.99')
  })
})

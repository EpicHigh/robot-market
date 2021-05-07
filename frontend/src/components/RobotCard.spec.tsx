import mockRobot from '../mocks/robot'
import { render, userEvent } from '../utils/test-utils'
import RobotCard from './RobotCard'

describe('RobotCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RobotCard handleAddToCart={jest.fn} robot={mockRobot[0]} />
    )

    expect(baseElement).toBeInTheDocument()
  })

  it('should call mock function when the button is clicked', () => {
    const mockHandleAddToCart = jest.fn()
    const { queryByTestId } = render(
      <RobotCard handleAddToCart={mockHandleAddToCart} robot={mockRobot[0]} />
    )
    const addToCart = queryByTestId('addToCart') as HTMLElement

    userEvent.click(addToCart)

    expect(mockHandleAddToCart).toHaveBeenCalled()
  })
})

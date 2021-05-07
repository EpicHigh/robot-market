import mockRobot from '../mocks/robot'
import { render } from '../utils/test-utils'
import RobotList from './RobotList'

describe('RobotList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RobotList handleAddToCart={jest.fn} robots={mockRobot} />
    )
    expect(baseElement).toBeInTheDocument()
  })
})

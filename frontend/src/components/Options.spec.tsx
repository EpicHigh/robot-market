import { render } from '../utils/test-utils'
import Options from './Options'

describe('Options', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Options materials={['test', 'test1']} value="test" onChange={jest.fn} />
    )

    expect(baseElement).toBeInTheDocument()
  })
})

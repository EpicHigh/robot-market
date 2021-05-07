import { render } from '../utils/test-utils'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBar />)
    expect(baseElement).toBeInTheDocument()
  })
})

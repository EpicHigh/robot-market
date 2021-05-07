import { render } from '../utils/test-utils'
import AlertDialog from './Dialog'

describe('Dialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AlertDialog
        dialog={{ title: 'foo', description: 'bar', open: true }}
        handleOnClose={jest.fn}
      />
    )
    expect(baseElement).toBeInTheDocument()
  })

  it('should contain only div when open is false', () => {
    const { baseElement } = render(
      <AlertDialog
        dialog={{ title: 'foo', description: 'bar', open: false }}
        handleOnClose={jest.fn}
      />
    )
    expect(baseElement).toContainHTML('<div></div>')
  })
})

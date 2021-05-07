import priceFormat from './priceFormat'

describe('priceFormat', () => {
  it('should return string with THB format', () => {
    expect(priceFormat(144.13)).toBe('฿144.13')
  })
})

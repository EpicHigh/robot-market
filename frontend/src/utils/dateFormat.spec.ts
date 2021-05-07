import dateFormat from './dateFormat'

describe('dateFormat', () => {
  it('should return date with DD-MM-YYYY format', () => {
    expect(dateFormat(new Date(2021, 4, 7))).toBe('7/5/2021')
  })
})

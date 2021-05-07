const priceFormat = (number: number): string => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(number)
}

export default priceFormat

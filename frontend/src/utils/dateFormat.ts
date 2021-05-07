const dateFormat = (date: Date): string => {
  return new Intl.DateTimeFormat('tzm-Latn-DZ').format(date)
}

export default dateFormat

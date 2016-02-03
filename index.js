module.exports = ((item) => {
  const total = Object.keys(item).map((key) => {
    const value = item[key]

    return typeof value === 'number' && isFinite(value) ? value : 0
  })

  return total.reduce((prev, current) => {
    return prev + current
  })
})

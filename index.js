module.exports = ((item) => {
  const total = Object.keys(item).map((key) => {
    return item[key]
  })

  return total.reduce((prev, current) => {
    return (prev * 1) + (current * 1)
  })
})

const test = require('ava')
const sumValues = require('./')


test('return 11', t => {
  let total = sumValues({
    a: 1,
    b: 10
  })

  t.is(total, 11)
})

test('return 5', t => {
  let total = sumValues({
    a: "2",
    b: 3,
    c: null
  })

  t.is(total, 5)
})

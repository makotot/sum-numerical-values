const test = require('ava')
const sumValues = require('./')


test('return 11', t => {
  const total = sumValues({
    a: 1,
    b: 10
  })

  t.is(total, 11)
})

test('return 3', t => {
  const total = sumValues({
    a: "2",
    b: 3,
    c: null
  })

  t.is(total, 3)
})

test('return 4', t => {
  const total = sumValues({
    a: {},
    b: 1,
    c: 3
  })

  t.is(total, 4)
})

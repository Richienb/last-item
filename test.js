const test = require("ava")
const lastItem = require(".")

test("main", t => {
	t.is(lastItem([1, 2, 3]), 3)
})

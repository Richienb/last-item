"use strict"

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	return array[array.length - 1]
}

export default function lastItem(iterable) {
	if (Array.isArray(iterable) || typeof iterable === 'string') {
		return iterable[iterable.length - 1];
	}

	if (iterable === undefined || iterable === null || typeof iterable[Symbol.iterator] !== 'function') {
		throw new TypeError('Expected an array or other iterable value');
	}

	let value;
	for (value of iterable) {} // eslint-disable-line no-empty

	return value;
}

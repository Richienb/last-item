import test from 'ava';
import lastItem from './index.js';

test('main', t => {
	t.is(lastItem([1, 2, 3]), 3);
	t.is(lastItem('abc'), 'c');
	t.is(lastItem(new Set([1, 2, 3])), 3);
});

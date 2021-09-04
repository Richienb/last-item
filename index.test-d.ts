import {expectType} from 'tsd';
import lastItem from './index.js';

expectType<3>(lastItem([1, 2, 3]));
expectType<string>(lastItem('abc'));
expectType<number>(lastItem(new Set([1, 2, 3])));

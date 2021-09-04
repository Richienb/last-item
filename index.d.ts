/**
Get the last item in an array or other iterable.

@param iterable The array or other iterable to get the last item for.

@example
```
import lastItem from 'last-item';

lastItem([1, 2, 3]);
```
*/
export default function lastItem<ValueType, _>(iterable: [..._[], ValueType]): ValueType;
export default function lastItem<ValueType>(iterable: Iterable<ValueType>): ValueType;

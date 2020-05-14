/**
Get the last item in an array.
@param array The array to get the last item for.
@example
```
const lastItem = require("last-item");

lastItem([1, 2, 3]);
//=> 3
```
*/
declare function lastItem<ValueType>(array: ValueType[]): ValueType

export = lastItem

# Array Functions

RTR provides several built-in functions for array manipulation and operations.

## length

Returns the number of elements in an array.

```js
numbers = [1, 2, 3, 4, 5];
length(numbers);              /* Returns 5 */
length([]);                   /* Returns 0 */
```

## item

Returns the element at the specified index in an array.

```js
numbers = [1, 2, 3, 4, 5];
item(numbers, 2);             /* Returns 3 */
item(numbers, 0);             /* Returns 1 */
```

## range

Creates an array of numbers from start to end (inclusive).

```js
range(1, 5);                  /* Returns [1, 2, 3, 4, 5] */
range(0, 2);                  /* Returns [0, 1, 2] */
``` 
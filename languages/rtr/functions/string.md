# String Functions

RTR provides several built-in functions for string manipulation and operations.

## join

Concatenates multiple strings together.

```js
join("Hello ", "World");  /* Returns "Hello World" */
join("a", "b", "c");     /* Returns "abc" */
```

## split

Splits a string into an array of substrings based on a delimiter.

```js
split("Hello World", " ");    /* Returns ["Hello", "World"] */
split("a-b-c", "-");          /* Returns ["a", "b", "c"] */
```

## chr

Converts a number to its corresponding ASCII character.

```js
chr(65);                      /* Returns "A" */
chr(97);                      /* Returns "a" */
```

## ord

Converts a character to its corresponding ASCII code.

```js
ord("A");                     /* Returns 65 */
ord("a");                     /* Returns 97 */
```

## length

Returns the length of a string.

```js
length("Hello");              /* Returns 5 */
length("");                   /* Returns 0 */
```

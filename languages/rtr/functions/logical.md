# Logical Functions

RTR provides several built-in functions for logical operations.

## all

Returns true if all arguments evaluate to true.

```js
all(true, true, true);        /* Returns true */
all(true, false, true);       /* Returns false */
all(true, 1, "hello");        /* Returns true */
```

## any

Returns true if any argument evaluates to true.

```js
any(false, false, true);      /* Returns true */
any(false, false, false);     /* Returns false */
any(false, 0, "hello");       /* Returns true */
```

## not

Returns the logical negation of the argument.

```js
not(true);                    /* Returns false */
not(false);                   /* Returns true */
not(0);                       /* Returns true */
not(1);                       /* Returns false */
``` 
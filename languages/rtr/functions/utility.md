# Utility Functions

RTR provides several built-in utility functions for common operations.

## log

Outputs a message to the console.

```js
log("Hello, World!");         /* Outputs: Hello, World! */
log("Value:", 42);            /* Outputs: Value: 42 */
```

## return

Exits a function and returns a value.

```js
greet = (name)~{
    return(join("Hello, ", name));
}
```

## error

Throws an error with the specified message.

```js
if (age < 0) {
    error("Age cannot be negative");
}
``` 
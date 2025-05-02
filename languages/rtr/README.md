# RTR Documentation

RTR is a lightweight, event-driven scripting language designed for simplicity and flexibility. This documentation provides comprehensive information about the RTR language, its features, and how to use it effectively.

## Documentation Sections

1. [Basics](basics.md) - Learn the fundamental concepts and syntax of RTR
2. [Structure](structure.md) - Understand the core components and structure of RTR code
3. [Functions](functions/README.md) - Detailed documentation of all built-in functions

## What is RTR?

RTR is a scripting language that provides:

- Event-driven programming model
- Simple and intuitive syntax
- Built-in functions for common operations
- Object-oriented capabilities
- Dynamic typing
- Error handling
- Modular and extensible design

## Key Features

- **Event System**: Organize code around events
- **Variables**: Dynamic typing with support for various data types
- **Functions**: Define and call functions with parameters
- **Objects**: Create and manipulate objects with methods
- **Control Flow**: If statements, loops, and more
- **Built-in Functions**: Mathematical, string, array, and object operations
- **Error Handling**: Basic error handling through events
- **Comments**: Multiline comments using `/* */` syntax
- **Whitespace**: Newlines have no syntactic meaning

## Example

Here's a simple example of RTR code:

```js
event (onload) {
    /* Create a person object */
    person = obj();
    person.name = "John";
    person.age = 30;
    
    /* Define a greeting method */
    person.greet = (name)~{
        return(join("Hello, ", name, "! I am ", this.name));
    }
    
    /* Use the method */
    message = person.greet("Alice");
    log(message);  /* Outputs: Hello, Alice! I am John */
}
```

## Getting Started

To start using RTR:

1. Read the [Basics](basics.md) guide to learn the fundamental concepts
2. Explore the [Structure](structure.md) documentation to understand how RTR code is organized
3. Check out the [Functions](functions/README.md) documentation to learn about available built-in functions
4. Try writing your own RTR code using the examples provided
5. Use the built-in functions and features to build your applications

## Resources

- [GitHub Repository](https://github.com/RoturTW/.rtr) - Source code and additional resources
- [Examples](basics.md#examples) - Code examples and use cases
- [Best Practices](basics.md#best-practices) - Guidelines for writing effective RTR code 
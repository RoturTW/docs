# Object Functions

RTR provides several built-in functions for object manipulation and operations.

## keys

Returns an array of all enumerable property names of an object.

```js
person = {name: "John", age: 30};
keys(person);                 /* Returns ["name", "age"] */
keys({});                     /* Returns [] */
```

## values

Returns an array of all enumerable property values of an object.

```js
person = {name: "John", age: 30};
values(person);               /* Returns ["John", 30] */
values({});                   /* Returns [] */
```

## has

Checks if an object has a specific property.

```js
person = {name: "John", age: 30};
has(person, "name");          /* Returns true */
has(person, "address");       /* Returns false */
```

## obj

Creates a new empty object.

```js
person = obj();
person.name = "John";
person.age = 30;
``` 
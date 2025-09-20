# Structure

RWL is mainly composed of a handfull of things:

## Elements

A node used to define objects, that can contain optional attributes or nested elements (blocks)

```js
"hi" [id = "myID"]
```

Elements can also have a number of attributes.

```js
"hi" [id = "myID", font = "llama"]
```

## Blocks

Type of element that contains nested nodes

```js
name {
    content
}
```

```javascript
name [attributes] {
    content
}
```

## Segments

One or more elements as a list

```js
"hi",
frame {}
```

## Attributes

A key or flag, usually inside square brackets in an element or block.

### Key

```js
id = "myID"
```

### Flag

```js
Horizontal
```

## Value

Simply a value that can denote somthing.

### str (string):

text in "", '' or \`\`:

```js
"Hello World!"
'wow'
`:3`
```

### num (number):

any numerical number:

```js
4
-7
3.14
1e-18
```

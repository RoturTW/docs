# Basics

RWL (rotur web language) is a language that is used to structure rotur websites.

### Displaying your first piece of text

In RWL all you need to show a peice of text on a page is:

```js
root {
  "Hello World!"
}
```

The text itself must be in `""`, `''` or ` `` `, as these are used to figure out what type a value is.

You can also add more text elements, with commas inbetween each one:

```js
root {
  "Hello World!",
  ":D",
  6
}
```

### Website Types

RWL websites are generally in 2 different types:

#### Element based:

Uses elements to denote the layout and contents of a page.

```js
// root is needed for element based websites
root {
  // code
}
```

Can be useful for more static and simple websites.

#### Script based:

Uses a script to draw the page (usually using RTR)

```js
script [type="rtr"] {
  // rtr code
}
```

Can be useful for more dynamic and complicated websites that require custom graphics.

{% hint style="info" %}
Drawing things with rtr can also be used on element based websites.
{% endhint %}

---
description: >-
  Attribute list for any non-block element, this could also be any type, for
  example a number.
---

# Text

## Key-Value Pairs

### font

Changes the font used for rendering the text

```javascript
"Hello World" [font="llama"]
```

### size

The size of the text, the default text size being 10.

```javascript
"Large Text" [size=20]
```

spacing

The space between each character in a font

<pre class="language-javascript"><code class="lang-javascript">// the space between each character would be x2 what it would normally be
<strong>"Wide Text" [spacing=2]
</strong></code></pre>

### line\_height

The space between each line in a font

```javascript
// the space between each line would be 2x what it would normally be
"Text With\nBig Lines" [line_height=2]
```

### alignment

The side(s) that the text will be neighboring, which can use both their full name and short name so e.g. "bottom right" and "br"

```javascript
"Im in the corner :3" [alignment="top left"]
```

### link

Sets the text to be clickable to redirect or open a new page for the user

```javascript
"Funny Website" [link="flufi.web"]
```

### decoration

Sets the text decoration, e.g. hiding the blue text on a link:

```javascript
"This is actually a link!" [link="flufi.web",decoration="none"]
```

## Flags

### Redirect

Used on links to instead of opening a new tab in the browser, redirecting the current page to the link.

```javascript
"Redirecting link :3" [link="flufi.web",Redirect]
```

### Wrapped

Makes the text automatically wrap against the boundries of the current frame (or window if there is no frame)

```javascript
"This is super very long and very big text that will be wrapped!" [size=50,Wrapped]
```

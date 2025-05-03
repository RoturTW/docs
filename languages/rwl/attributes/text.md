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

### spacing

The space between each character in a font

```javascript
// the space between each character would be x2 what it would normally be
"Wide Text" [spacing=2]
```

### line\_height

The space between each line in a font

```javascript
// the space between each line would be 2x what it would normally be
"Text With\nBig Lines" [line_height=2]
```

### anchor

The side(s) that the text will be neighboring, which can use both their full name and short name so e.g. "bottom right" and "br"

```javascript
"Im in the corner :3" [anchor="top left"]
```

### alignment

The position from where the element's text will start from:

```javascript
"Im centered :3" [alignment="center"],
"Im centered from the left" [alignment="left"]
```

{% hint style="info" %}
alignments use the same names as anchors.
{% endhint %}

### padding

The space between the text and the border of a frame, the default being 10.

```javascript
"Ive got padding :P" [padding=100,anchor="tl"]
```

{% hint style="info" %}
this doesnt have any affect when the anchor is the center.
{% endhint %}

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

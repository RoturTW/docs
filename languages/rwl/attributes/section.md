---
description: Attribute list for sections
---

# Section

## Key-Value Pairs

### width

determines the width of the section, percentages being a % of the remaining space in the parent [frame](frame.md) and numbers being the pixel size

```javascript
section [width = 50%] {
    // code
}
```

### height

determines the height of the section, using the same rules as width

```javascript
section [height = 100] {
    // code
}
```

### size

similar to width and height, but it uses the frame axes.

```javascript
frame [Horizontal] {
    section [size=50%] {
        // uses 50% of the frame horizontally
    }
}
```

### overflow

This describes the behaviour of an element when it is partially or fully outside the section.

<table><thead><tr><th width="108">name</th><th>behaviour</th></tr></thead><tbody><tr><td>visible</td><td>simply lets the text go over the section boundries</td></tr><tr><td>clip</td><td>clips off the text that is over the section boundries</td></tr><tr><td>scroll</td><td>turns the section into a scrollview on both axes at all times</td></tr><tr><td>auto</td><td>turns into a scroll view on the axes that are overflowing</td></tr></tbody></table>


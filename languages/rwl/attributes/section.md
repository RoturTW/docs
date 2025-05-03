---
description: Attribute list for sections
---

# Section

## Key-Value Pairs

```javascript
section [width = 50%] {
    // code
}
```

```javascript
section [height = 30%] {
    // code
}
```

overflow

This describes the behaviour of an element when it is partially or fully outside the section.

<table><thead><tr><th width="108">name</th><th>behaviour</th></tr></thead><tbody><tr><td>visible</td><td>simply lets the text go over the section boundries</td></tr><tr><td>clip</td><td>clips off the text that is over the section boundries</td></tr><tr><td>scroll</td><td>turns the section into a scrollview on both axes at all times</td></tr><tr><td>auto</td><td>turns into a scroll view on the axes that are overflowing</td></tr></tbody></table>


---
description: A list of alignments
---

# Alignments and Anchors

Alignments and Anchors in RWL display where an element should be in a frame or where the element's text should start from within the element respectively.

{% tabs %}
{% tab title="Full Name" %}
| Position | Left        | Middle | Right        |
| -------- | ----------- | ------ | ------------ |
| Top      | top left    | top    | top right    |
| Middle   | left        | center | right        |
| Right    | bottom left | bottom | bottom right |
{% endtab %}

{% tab title="Short Name" %}
| Position | Left | Middle | Right |
| -------- | ---- | ------ | ----- |
| Top      | tl   | t      | tr    |
| Middle   | l    | c      | r     |
| Right    | bl   | b      | br    |
{% endtab %}
{% endtabs %}

Both the full names and short names can be used:

```javascript
"Hi im in the top right" [anchor="tr"],
"I start from the right" [anchor="right"]
```

---
description: Attribute list for sections
---

# Section

## Key-Value Pairs

### size

This defines the size of the section.

```javascript
frame [Horizontal] {
    section [size = 100] { // 100 pixels / units in width
        // code
    }
}
```

{% hint style="info" %}
This is only usable in 1 axes frames:
{% endhint %}



### width

This defines the width of the section.

<pre class="language-javascript"><code class="lang-javascript">section [width = 50%] {
<strong>    // code
</strong>}
</code></pre>

{% hint style="info" %}
This is only usable in frames that are split horizontally.
{% endhint %}



### height

This defines the height of the section.

```javascript
section [height = 30%] {
    // code
}
```

{% hint style="info" %}
This is only usable in frames that are split vertically
{% endhint %}

overflow

This describes the behaviour of an element when it is partially or fully outside the section.

<table><thead><tr><th width="108">name</th><th>behaviour</th></tr></thead><tbody><tr><td>visible</td><td>simply lets the text go over the section boundries</td></tr><tr><td>clip</td><td>clips off the text that is over the section boundries</td></tr><tr><td>scroll</td><td>turns the section into a scrollview on both axes at all times</td></tr><tr><td>auto</td><td>turns into a scroll view on the axes that are overflowing</td></tr></tbody></table>


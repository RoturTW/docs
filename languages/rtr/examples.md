# Examples

a script that iterates a variable by 1, 8 million times in one second

```js
event (onload) {
  frames = 0
  repeat (8000000) {
    frames += 1
  }
  exit()
}
```

an update loop that does a similar thing

```js
event (update) {
  frames += 1
  if (frames > 10000) {
    exit()
  }
}

event (onload) {
  frames = 0
}
```

A script that logs the mouse x and mouse y whenever the mouse moves

```js
event (mouse onmove) {
  mouse = window.mouse
  log(mouse.x,mouse.y)
}
```

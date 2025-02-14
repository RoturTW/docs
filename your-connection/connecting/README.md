# Connecting

Rotur's websocket is hosted at&#x20;

```
wss://rotur.mistium.com

or

wss://ws.rotur.dev
```

Both websocket urls lead to the same server so if you connect to ws.rotur.dev and your friend connects to rotur.mistium.com you two can still chat just fine!



The first step is simply to open a websocket connection with rotur!

<pre class="language-javascript" data-title="rotur.js" data-line-numbers data-full-width="false"><code class="lang-javascript"><strong>my_rotur = new WebSocket("wss://ws.rotur.dev")
</strong><strong>
</strong><strong>my_rotur.onopen = () => {
</strong><strong>  console.log("Connected!")
</strong><strong>  // your logic for handling packets goes here
</strong><strong>}
</strong></code></pre>

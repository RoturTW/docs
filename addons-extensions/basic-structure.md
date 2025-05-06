# Basic Structure

The structure of extensions should follow this:

<pre class="language-json5"><code class="lang-json5"><strong>{
</strong>    "metadata": {
        "id": "myext",
        "name": "my Extension",
        "description": "a funny extension :3", // optional
        "author": "flufi",
        "language": "osl"
    },
    "events": {
        "onload": ...,
        "anotherevent": ...
    }
}
</code></pre>

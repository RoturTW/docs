# SetID

This command is also largely unchanged in comparison to the cl4 standard, except for one change. you are able to change your username to anything without disconnecting first. The server will make a fake disconnect and reconnect for you and rename you on all other active clients.

```javascript
{
  "cmd": "setid",
  "val": "", // the username you want other users to know you as
  "listener": "username_cfg" // the listener for your packet
}
```

You should then recieve these packets from the server

<pre class="language-javascript"><code class="lang-javascript">{
  "cmd": "ulist",
<strong>  "mode": "set", // overwrite your local userlist
</strong><strong>  "val": [ // an array of user objects. These may be updated later to contain more info
</strong><strong>    {"username": "ori-EwZWksbrYDBAxziSZwWejSwK2QMMzGZf"}
</strong><strong>  ],
</strong><strong>  "room": "default"
</strong><strong>}
</strong></code></pre>

```javascript
{
  "cmd": "statuscode",
  "code": "I:100 | OK", 
  "code_id": 100, 
  "listener": "username_cfg", // this is the response for your set username packet
  "val": {
    "room": "default", // the room your username was changed in
    "username": "ori-EwZWksbrYDBAxziSZwWejSwK2QMMzGZf" // the value your username is set to
  }
}
```

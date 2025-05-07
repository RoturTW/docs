# Get User Data

You can easily get user data using the /get\_user endpoint on social.rotur.dev.

```javascript
fetch("https://social.rotur.dev/get_user?username=" + username + "&password=" + password)
.then(response => response.json())
.then(data => {
  if (data.error) {
    // lets you handle for example "invalid credentials"
    throw new Error(data.error);
  }
  console.log('User data:', data);
}).catch(error => {
  console.error('Error fetching user data:', error);
});
```

The data variable here is a rotur account object, find more here:  [rotur-account-objects](../../my-account/rotur-account-objects/ "mention").

You can then use the auth command:  [login-to-rotur-auth.md](../websocket-commands/login-to-rotur-auth.md "mention")  to authenticate with the websocket server. This is the preferable way to do the login and auth flow since its by far the fastest.

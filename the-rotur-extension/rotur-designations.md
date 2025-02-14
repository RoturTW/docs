# Rotur Designations

Find all users connected on a specific designation

![block\_15\_08\_2024-02\_49\_53](https://github.com/user-attachments/assets/6f394c01-b463-4b68-9cbe-b9f6e2151c07)

***

Find if a user is connected with a specific designation

![block\_15\_08\_2024-02\_58\_50](https://github.com/user-attachments/assets/09350004-cb6b-4140-af8d-7cc8650f66a5)

***

Find if a user is connected without needing a designation

![block\_15\_08\_2024-03\_01\_20](https://github.com/user-attachments/assets/fff82e49-81b6-4dd9-9c51-fc542973fbff)

***

Find all connections that are logged into a specific username

![block\_15\_08\_2024-02\_50\_15](https://github.com/user-attachments/assets/e8a0894f-ce47-4f63-8a08-ef31e84ad3c1)

***

### What is the format for a username?

\[designation]-\[username]

Example:

if you logged into originOS with the username Mist you might end up with the connection id of:

```
ori-Mist§afRs36sew
```

This is because the rotur username system gives each client a unique string after their name, so that multiple logins of the same user can all be handled individually. Rotur will handle this for you. to send a message to someone, get all clients on that username and to get the oldest (the standard for who to message) get the first item in the array.


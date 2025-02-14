# Rmail

Rmail allows for any project to have access to a working emails system!

You could make your own email client, integrate emails into your own os, or just mess around :P

## When recieved

![block\_15\_08\_2024-02\_14\_09](https://github.com/user-attachments/assets/d4a4d88c-1051-49ed-a89b-f987d2165828)

This Hat will fire whenever your account receives a new email, allowing you to refresh your email client when needed

## Send Mail

![block\_15\_08\_2024-02\_15\_20](https://github.com/user-attachments/assets/9ac3a333-1f6a-49ac-a411-feab96e1331c)

This block allows you to send an Rmail to any user on rotur

### Success

"Mail sent to \[username]"

### Failure

```
Attempted to send more than 100 characters in the title of the Rmail
"Cannot Send Mail With Title Longer Than 100 Characters"

Attempted to send more than 50,000 characters in the body of the Rmail
"Cannot Send Mail Thats More Than 50kb"
```

## Get Mail

![block\_15\_08\_2024-02\_19\_13](https://github.com/user-attachments/assets/58fe1ccc-b4e1-49b2-9f18-cd3f62a465c9)

This block return an array of mail items

Here is an example of some mail:

```js
[
  {
    "title":"Subject",
    "recipient":"user",
    "timestamp":1723684583612,
    "from":"temp"
  }
]
```

## Get Body

![block\_15\_08\_2024-02\_21\_16](https://github.com/user-attachments/assets/36d7b6db-9cc5-44d5-ad3b-2659c8b83bcf)

This block is how you actually read the Rmails, it returns the Rmail body at a specific index of the mail list array

An example response for this block is below:

```js
{
  "body":"Message",
  "info":{
    "title":"Subject",
    "recipient":"user",
    "timestamp":1723684583612,
    "from":"temp"
  }
}
```

## Delete Mail

![block\_15\_08\_2024-02\_23\_32](https://github.com/user-attachments/assets/5f437444-d002-4a29-8a54-cfb94d0a9f99)

This block works the same as the `get body` reporter, except it will delete an Rmail from your account and shift the rest along

## Delete all Mail

![block\_15\_08\_2024-02\_24\_46](https://github.com/user-attachments/assets/d550801f-4237-4767-8a51-2539240823c2)

This block will entirely clear your account of all Rmails

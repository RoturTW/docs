# Currency

The Currency system in rotur is simple and intuitive.

Every day that a user logs in, they gain 1 credit that they can send to any other user or buy items with.

## Get Balance

![block\_15\_08\_2024-02\_28\_38](https://github.com/user-attachments/assets/45f2d2af-8aa7-4946-9495-658c2163c757)

This block lets you view how many credits that your user account has, and will update when others send you credits or when you send them credits, or make purchases.

## Transfer To

![block\_15\_08\_2024-02\_28\_40](https://github.com/user-attachments/assets/c66ae48f-7444-4112-a303-23de9e68b416)

This block is simple and allows you to transfer a number of credits from your account to another

### Successful Transfer

```
"Success"
```

### Failed Transfer

```
Attempted to send a string:
"Transaction Must Be A Number"

Attempted to send a small value
"Transaction Cannot Be Less Than 0.01"

Tried to transfer currency to yourself:
"You Cannot Send To Yourself"

Attempted to send to an account that doesn't exist:
"No Account With That Name"

Attempted to send more credits than you have:
"Not Enough Credits For This Transaction"
```

## When Balance Changed

![block\_15\_08\_2024-02\_28\_42](https://github.com/user-attachments/assets/4f43cd08-8a7f-4244-a79b-d50610556929)

This hat block will fire whenever the user's balance has changed

## Get Transactions

![block\_15\_08\_2024-02\_28\_43](https://github.com/user-attachments/assets/75d0999a-a730-490b-a63c-f2f53f7d7a92)

This reporter will return an array of text that can be displayed to the user for each past transaction on the account

Example data:

```js
[
  "sent 5 to Hello",
  "sent 1234 to Mist",
  "got 1234 from mist",
]
```

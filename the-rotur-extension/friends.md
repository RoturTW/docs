# Friends

The friends system is by far the easiest plug and play friends system that you will find on any scratch extension.

## How does it work?

The friends system has 2 arrays for each user, an array of incoming friend requests, and an array of current friends.

You cannot see a list of the friend requests you have sent.

### What is "Not Authenticated"

![block\_15\_08\_2024-12\_32\_27](https://github.com/user-attachments/assets/74c9637e-4561-4fb4-8ae4-60919f2826c8)

This simply means you haven't logged in yet, When you do login, it will show a list of users on your friends list.

## Blocks

### Friend List

![block\_15\_08\_2024-12\_37\_16](https://github.com/user-attachments/assets/e449b778-0f44-4057-9000-ba9ebd5359c8)

This returns an array of all the usernames of people in your friends list

Example:

```js
[
  "wow"
]
```

### Remove Friend

![block\_15\_08\_2024-12\_36\_17](https://github.com/user-attachments/assets/836d257c-74cf-449e-a204-58bcc600c8d6)

This block is pretty self explanatory, it removes the friendship status from both you and the person you unfriended.

### Accept Request

![block\_15\_08\_2024-12\_38\_17](https://github.com/user-attachments/assets/25fea74e-e2e5-4ea6-9e45-b9d08c5025aa)

This allows you to accept a friend request from a username, adding them to your friends list, and you to theirs

### Decline Request

![block\_15\_08\_2024-12\_39\_06](https://github.com/user-attachments/assets/ce8b7a98-7386-47c1-957b-227eb08698c2)

This block allows you to remove a pending friend request from a user

### Send Request

![block\_15\_08\_2024-12\_47\_57](https://github.com/user-attachments/assets/5c0ce4b6-a87f-4087-828a-d0f3a16c77a2)

This block allows you to send a friend request to another user.

#### Success

```
"Sent Successfully"
```

#### Failure

```
Attempted to send a request to someone you are friends with
"Already Friends"

Attempted to send a request to someone you already friend requested
"Already Requested"

Attempted to send a friend request to an account that doesn't exist
"Account Does Not Exist"

Attempted to friend request yourself
"You Need Other Friends :/"
```

### When Request Received

![block\_15\_08\_2024-12\_56\_00](https://github.com/user-attachments/assets/bb9f023d-c133-4da8-80de-732681ce711e)

This event block will fire whenever someone else sends you a friend request

### When Request Accepted

![block\_15\_08\_2024-12\_56\_37](https://github.com/user-attachments/assets/263c1acc-d6da-4f71-a73a-4b94a1c7b2a4)

This event block will fire whenever someone accepts one of your friend requests

### Get Requests

![block\_15\_08\_2024-12\_57\_13](https://github.com/user-attachments/assets/c839af93-1efe-4636-bdda-a2c6963ad8df)

This block returns an array of the incoming friend requests to your account

Example:

```js
[
  "constellinux"
]
```

### Friend Status

![block\_15\_08\_2024-12\_58\_15](https://github.com/user-attachments/assets/6bd39e25-47eb-4419-91f2-e38bfb4f44ef)

Put the username of someone in this block and it can output a few different things:

```
When you are friends with someone
"Friend"

When you have a request from someone
"Requested"

Otherwise
"Not Friend"
```

### Friend Count

![block\_15\_08\_2024-13\_00\_41](https://github.com/user-attachments/assets/77f32a72-3125-40ef-9b06-65debfedcdd1)

This block simply tells you how many friends that you have

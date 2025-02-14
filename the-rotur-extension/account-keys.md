# Account Keys

The user account is the primary focus of rotur, where you can set and retrieve all user information.

All user accounts will have the following keys that you can access:

## Main Keys

```
username       - (read only) The name of the user
created        - (read only) A unix timestamp of when the account was created
last_login     - (read only) A unix timestamp of when the user last logged in
max_size       - (read only) An integer of the maximum number of characters that can be stored of ofsf data in this account
system         - (read only) A string of the operating system that the account was created with
pfp            - A url to the user's profile picture
accent         - A colour hex code of the user's prefered accent
onboot         - An array of apps to open when the user logs in
theme          - An object of colours, allows user customisation, default is this: {"primary":"#222","secondary":"#555","tertiary":"#777","text":"#fff","background":"#050505"}
```

## SYS keys

All of the below are not writable using the "set \[key] to \[value]" reporter

```
sys.requests   - An array of all incoming friend requests
sys.friends    - An array of usernames that are friends with you
sys.items      - An array of item ids that the user has made
sys.purchases  - An array of item ids that the user has bought or made
sys.currency   - An integer of the amount of credits a user has
```

## Set a key

When you set a key, it has to send a request to the server so this might not complete instantly

If a key is read only, you will get this response:\
![Screenshot 2024-08-15 at 01 56 37](https://github.com/user-attachments/assets/f9bcf9dd-5d14-4f09-948d-ca46ab1fe528)

The max length for a value is 1000

The max length for a key is 20

If the data you try to write to the key is too big, it will give this response:\
![Screenshot 2024-08-15 at 02 03 54](https://github.com/user-attachments/assets/c96fc7a5-8db1-4569-b876-90b08f08cb58)

If the key itself is too long, you will get this response:\
![Screenshot 2024-08-15 at 02 00 59](https://github.com/user-attachments/assets/daeb8c25-d56d-4dc3-b8a8-72307873ca5e)

If the key is updated successfully you will get this response:\
![Screenshot 2024-08-15 at 02 03 41](https://github.com/user-attachments/assets/928922ba-a31d-4493-94c7-161947d041e6)

If the key you updated makes the account go over it's maximum key storage of 25,000 characters, you will get this response:\
![image](https://github.com/user-attachments/assets/b0b3c722-cbb5-48da-866a-5812ed977545)

It is recommended that you use the storage apis for all data storage. Account keys for simply for user preferences.

# Transactions and Taxes

Across rotur is an integrated currency and economy system. This lets users transfer credits and earn credits from other users.

## Transferring Credits

Using the rotur websocket you can tell the rotur server to transfer credits to another user.

```javascript
{
    "cmd": "pmsg",
    "val": {
        "id": "", // your account token
        "username": "", // the username you are connected as
        "client": { // client object
            "system": "originOS",
            "version": "v5.5.4"
        },
        "source": 0, // send to root port
        "command": "currency_transfer", // the command for the server to perform
        "payload": {
            "recipient": "rotur", // the username you are sending to
            "amount": 1, // the number of credits to send to them (excluding tax)
            "note": "hello lmao" // a note for the transaction
        },
        "timestamp": 1739625545700 // when it was sent
    },
    "id": "sys-rotur", // 
    "rooms": "roturTW"
}
```

## Rotur Taxes

### transfers made on discord

0.5 credits to the owner of the os that your linked account was made with

* your account was made on originOS so i get 0.5 credits every time you make a transfer

### transfers made on any roturOS

0.5 credits go to the owner of the os that you are currently using

* you are logged into originOS and you use the wallet app to make the transfer, i get 0.5 credits

### all transfers

0.5 credits get deleted for any transfer in order to keep the economy stable

# Packets

## Sending a packet

If you haven't already, you should use the sample project that is linked to on the home page of the wiki, since it handles receiving and sending packets for you.

## What the raw packet data looks like

## A packet you sent

```json
{
    "cmd": "pmsg",
    "val": {
        "client": {
            "system": "(name of the system you are using)",
            "version": "(version of the system you are using)"
        },
        "target": "(this is the 'port' that you want to send to)",
        "payload": "(the data that you are sending to the port)"
    },
    "id": "(username to send the packet to)"
}
```

## Receiving a packet

```json
{
    "cmd": "pmsg",
    "val": {
        "client": {
            "system": "(name of the system they are using)",
            "version": "(version of the system they are using)"
        },
        "target": "(this contains the port that the message is targeted at on your client)",
        "source": "(this contains the port that the message was sent from)"
        "payload": "(the data you received from the port)"
    },
    "origin": {
        "id": "(connection id)",
        "username": "(username that sent you this packet)",
        "uuid": "(connection uuid)"
    },
    "rooms": "roturTW"
}
```

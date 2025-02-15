# Requesting my ofsf storage

OFSF is specific to originOS. At current time the only rotur os that supports it is originOS.



### Before requesting

Ensure you are connected and authenticated on rotur.

### Sending the request for a download link

```javascript
{
    "cmd": "pmsg",
    "val": {
        "id": "", // your account token
        "client": {
            "system": "originOS",
            "version": "v5.5.4"
        },
        "source": "0",
        "payload": 1,
        "command": "Get_Files",
        "timestamp": 1739576519721 // when u sent the request
    },
    "id": "sys-rotur"
}
```

### Response

```javascript
{
    "cmd": "pmsg",
    "val": {
        "username": "sys-rotur",
        "source_command": "Get_Files",
        "target": 0,
        "files_size": 6850851, // the total size of your files in bytes
        "files_url": "", // the url that you should download to get your files
        "status": "Success"
    },
    "origin": {
        "username": "sys-rotur" // who sent the pmsg
    },
    "rooms": "roturTW"
}
```

# rMail

### Overview

The rMail system provides a simple but powerful messaging framework for users within the roturTW environment. This documentation outlines how to interact with the rMail API, covering request formats, available commands, response structures, and usage examples.

### Core Concepts

rMail operates on a packet-based communication system where clients send command packets and receive formatted responses. All interactions are JSON-based and follow consistent formatting patterns.

### Packet Format

#### Request Packet Structure

All requests to the rMail system use the following packet format:

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_command",
    "payload": {
      // Command-specific payload data
    },
    "origin": {
      "rotur": "username"
    }
  }
}
```

Key components:

* `cmd`: Always set to "pmsg" for rMail operations
* `val`: Contains the command details
  * `source`: Identifier of the requesting client
  * `command`: The specific rMail operation to perform
  * `payload`: Data relevant to the command (varies by command type)
  * `origin`: Contains authentication information
    * `rotur`: Username of the sender (will be converted to lowercase)

### Available Commands

#### 1. Get Mail Information (`omail_getinfo`)

Retrieves summary information about all rMails for the authenticated user.

**Request:**

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_getinfo",
    "origin": {
      "rotur": "username"
    }
  }
}
```

**Response:**

```json
{
  "cmd": "pmsg",
  "val": {
    "username": "sys-rotur",
    "source_command": "omail_getinfo",
    "target": "client_identifier",
    "payload": [
      {
        "recipient": "recipient_username",
        "title": "rMail Title",
        "timestamp": 1715054321000,
        "from": "sender_username"
      },
      // Additional rMail summary objects
    ]
  },
  "timestamp": 1715054321000,
  "origin": {
    "username": "sys-rotur"
  },
  "room": "roturTW"
}
```

#### 2. Send Mail (`omail_send`)

Sends a new rMail to another user.

**Request:**

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_send",
    "payload": {
      "recipient": "recipient_username",
      "title": "rMail Subject",
      "body": "rMail content goes here..."
    },
    "origin": {
      "rotur": "username"
    }
  }
}
```

**Response (Success):**

```json
{
  "cmd": "pmsg",
  "val": {
    "username": "sys-rotur",
    "source_command": "omail_send",
    "target": "client_identifier",
    "payload": "Successfully Sent Omail"
  },
  "timestamp": 1715054321000,
  "origin": {
    "username": "sys-rotur"
  },
  "room": "roturTW"
}
```

**Response (Rate Limited):**

```json
{
  "cmd": "pmsg",
  "val": {
    "username": "sys-rotur",
    "source_command": "omail_send",
    "target": "client_identifier",
    "payload": "Please wait before sending another rMail. Rate limit is 60 seconds."
  },
  "timestamp": 1715054321000,
  "origin": {
    "username": "sys-rotur"
  },
  "room": "roturTW"
}
```

#### 3. Delete Mail (`omail_delete`)

Deletes a specific rMail or all rMails for the authenticated user.

**Request (Delete Specific rMail):**

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_delete",
    "payload": 1, // Index of rMail to delete, this is 1 indexed
    "origin": {
      "rotur": "username"
    }
  }
}
```

**Request (Delete All rMails):**

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_delete",
    "payload": "all",
    "origin": {
      "rotur": "username"
    }
  }
}
```

**Response:**

```json
{
  "cmd": "pmsg",
  "val": {
    "username": "sys-rotur",
    "source_command": "omail_delete",
    "target": "client_identifier",
    "payload": "Deleted Successfully"
  },
  "timestamp": 1715054321000,
  "origin": {
    "username": "sys-rotur"
  },
  "room": "roturTW"
}
```

#### 4. Get rMail Count (`omail_total`)

Retrieves the total number of rMails for the authenticated user.

**Request:**

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_total",
    "origin": {
      "rotur": "username"
    }
  }
}
```

**Response:**

```json
{
  "cmd": "pmsg",
  "val": {
    "username": "sys-rotur",
    "source_command": "omail_total",
    "target": "client_identifier",
    "payload": 5 // Number of rMails
  },
  "timestamp": 1715054321000,
  "origin": {
    "username": "sys-rotur"
  },
  "room": "roturTW"
}
```

#### 5. Get rMail by ID (`omail_getid`)

Retrieves the full content of a specific rMail by its index.

**Request:**

```json
{
  "cmd": "pmsg",
  "val": {
    "source": "client_identifier",
    "command": "omail_getid",
    "payload": 1, // 1-based index of the rMail to retrieve
    "origin": {
      "rotur": "username"
    }
  }
}
```

**Response:**

```json
{
  "cmd": "pmsg",
  "val": {
    "username": "sys-rotur",
    "source_command": "omail_getid",
    "target": "client_identifier",
    "payload": [
      1, // The 1-based index of the rMail
      {
        "body": "This is the rMail content...",
        "info": {
          "recipient": "recipient_username",
          "title": "rMail Title",
          "timestamp": 1715054321000,
          "from": "sender_username"
        }
      }
    ]
  },
  "timestamp": 1715054321000,
  "origin": {
    "username": "sys-rotur"
  },
  "room": "roturTW"
}
```

### Limitations and Constraints

The rMail system has several built-in limitations:

1. **Rate Limiting**: Users can only send one rMail every 60 seconds.
2. **Size Limits**:
   * rMail payloads cannot exceed 50KB in size
   * rMail titles cannot exceed 100 characters
3. **Storage**: rMails are stored in a JSON file (`rmails.json`) on the server

### Data Structure

rMails are stored in the following structure:

```json
{
  "body": "Content of the rMail",
  "info": {
    "recipient": "username",
    "title": "rMail subject",
    "timestamp": 1715054321000,
    "from": "sender_username"
  }
}
```

### Implementation Details

#### Storage Files

The rMail system uses two main storage files:

1. **rmails.json**: Stores all rMail data, organized by username
2. **rmail\_ratelimits.json**: Tracks the last time each user sent a rMail for rate limiting

#### rMail Indexing

* New rMails are inserted at the beginning of a user's rMail list (index 0)
* Both sender and recipient receive a copy of each rMail
* rMail IDs used in client interfaces are 1-based, but internally they're 0-based

### Example Usage Scenarios

#### Checking for New rMails

```javascript
// First, get the total rMail count
sendPacket({
  "cmd": "pmsg",
  "val": {
    "source": "my_client",
    "command": "omail_total",
    "origin": {
      "rotur": "myusername"
    }
  }
});

// Then get the rMail info
sendPacket({
  "cmd": "pmsg",
  "val": {
    "source": "my_client",
    "command": "omail_getinfo",
    "origin": {
      "rotur": "myusername"
    }
  }
});
```

#### Sending a rMail

```javascript
sendPacket({
  "cmd": "pmsg",
  "val": {
    "source": "my_client",
    "command": "omail_send",
    "payload": {
      "recipient": "friend",
      "title": "Hello there",
      "body": "This is a test rMail sent via the rMail system!"
    },
    "origin": {
      "rotur": "myusername"
    }
  }
});
```

#### Reading a Specific rMail

```javascript
// Get rMail with ID 1 (the most recent rMail)
sendPacket({
  "cmd": "pmsg",
  "val": {
    "source": "my_client",
    "command": "omail_getid",
    "payload": 1,
    "origin": {
      "rotur": "myusername"
    }
  }
});
```

### Error Handling

The rMail system provides minimal error handling:

* If a requested rMail doesn't exist, an empty object is returned
* If a command is unrecognized, no response is sent
* Invalid deletion indices are silently ignored

### Best Practices

1. Always handle rate limiting gracefully by informing users when they need to wait
2. Cache rMail information when possible to reduce server load
3. Implement appropriate error handling for cases where rMails might not exist
4. Keep rMail content reasonably sized to avoid hitting the 50KB limit

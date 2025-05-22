# Accessing OFSF Storage

OFSF (OriginFS File System) is specific to originOS and provides cloud-based file storage for users.

## Overview

The new OFSF system provides direct HTTP access to user files through a simple REST API endpoint. This replaces the previous WebSocket-based rotur system with a more straightforward approach.

## Authentication

All requests require a valid user authentication token (`userObject.key`) that serves as both identification and authorization.

## Endpoint

### Get User Files
Retrieve all OFSF data associated with your account.

**URL:** `https://originfiles.mistium.com/read-files`

**Method:** `GET`

**Authentication:** Query parameter

**Parameters:**
- `auth` (required): Your user authentication token

### Request Example

```bash
curl "https://originfiles.mistium.com/read-files?auth=YOUR_USER_TOKEN"
```

```javascript
// JavaScript fetch example
const userToken = "your_user_token_here";
const response = await fetch(`https://originfiles.mistium.com/read-files?auth=${userToken}`);
const ofsfData = await response.json();
```

### Response

The endpoint returns the complete OFSF data structure for the authenticated user. The exact format depends on your stored files and directory structure.

**Success Response:**
- **Status Code:** 200 OK
- **Content-Type:** application/json
- **Body:** Complete OFSF file system data

**Error Responses:**
- **401 Unauthorized:** Invalid or missing authentication token
- **404 Not Found:** No OFSF data found for the user
- **500 Internal Server Error:** Server-side processing error

## Usage Notes

- The response contains your complete file system data, including file contents, metadata, and directory structure
- Ensure your authentication token is kept secure and not exposed in client-side code
- The response size may be large depending on your stored files
- This endpoint provides read-only access to your OFSF data

## Migration from Legacy System

This new HTTP-based system replaces the previous rotur WebSocket system. Key differences:

- **Simplified Authentication:** Single token parameter instead of complex message structure
- **Direct Access:** HTTP GET request instead of WebSocket message exchange
- **Immediate Response:** Files data returned directly instead of download URL
- **No Client Version Requirements:** No need to specify originOS version

# /post

## About

Creates a new post for the authenticated user.

## Parameters

| Parameter   | Description |
| ----------- | ----------- |
| auth        | A required user authentication key |
| content     | Required post content (max 100 characters) |
| attachment  | Optional parameter. A valid URL for an attachment (max 500 characters) |

## Endpoint

{% embed url="https://social.rotur.dev/post?auth=YOUR_AUTH_KEY&content=Hello&attachment=https://example.com/image.jpg" %}

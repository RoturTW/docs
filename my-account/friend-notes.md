# Friend Notes

Friend Notes let you privately store small bits of information about other users on Rotur — similar to Discord-style notes. These notes are **visible only to you**, never to the other user, and can be used for reminders, context, or anything else you want to remember about someone.

This feature is **paid**, available to anyone subscribed to any tier on [Ko-fi](https://ko-fi.com/mistium/tiers).

Friend Notes are stored directly on your account under the key `sys.notes`, indexed by username.

---

## How to Use Friend Notes

### Writing Notes

To update the note for a specific user, send a request to:

```
POST https://api.rotur.dev/me/note/{username}?auth={token}&note={encoded_note}
```

### Deleting Notes

To delete a note for a specific user, send a request to:

```
DELETE https://api.rotur.dev/me/note/{username}?auth={token}
```


### Reading Notes

Friend Notes are stored in your personal account data under:

```
sys.notes
```

This key is a dictionary where each key is a username and the value is the note text you saved.

Example:

```json
{
  "sys.notes": {
    "goober123": "Met in Origin chat\nLikes purple themes",
    "colon_three": "Artist — commissions open"
  }
}
```

If a user has no note, they simply won’t appear in the `sys.notes` object.

---

## Privacy

Friend Notes are **100% private**:

* Only **you** can view your notes.
* Other users are **never** notified that you added, edited, or deleted a note about them.
* Notes are **never** included in exports, public APIs, or profile data exposed to others.

---

## Limits

* Maximum note length: 300 characters.
* Notes must be plain text — no formatting or markup is interpreted.
* Each user can have one note entry; rewriting the note replaces the previous text.

---

## Who Can Use Friend Notes?

Any paid subscription tier → includes Friend Notes
Free accounts → not available

Subscribe here to unlock this feature:
**[https://ko-fi.com/mistium/tiers](https://ko-fi.com/mistium/tiers)**

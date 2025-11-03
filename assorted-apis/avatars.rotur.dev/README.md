# avatars.rotur.dev

Rotur avatars are served from avatars.rotur.dev allowing a client to render a minimal rotur account ui with only the username.

### About

* Images are all stored as jpeg
* Images are 256x256

### How do I get a profile picture?

Simply take the base api url "https://avatars.rotur.dev/" and add the rotur username on the end of it. The username is case insensitive, the same as rotur usernames generally are in all other apis.

* https://avatars.rotur.dev/mist
* https://avatars.rotur.dev/MiSt

## Query params

- **size**: https://avatars.rotur.dev/mist?s=50
  - lets you get a specific size of a user's profile picture
 
- **radius**: https://avatars.rotur.dev/mist?radius=128
  - lets you request a rounded version of a profile picture without needing to do client side processing

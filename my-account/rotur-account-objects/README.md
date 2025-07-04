# Rotur Account Objects

A Rotur account object is a simple json object of keys and values.

## Key Limits

* Key names must be less than or equal 20 characters long
* Key values must be less than or equal to 1000 characters long
* The full account object is limited to 25,000 characters of text

## Rotur Keys

### Read Only

```
username
- your account's username (case insensitive)
  eg. mist

max_size
- the maximum size of your account ofsf stored in characters of text
  eg. "1000000000" (1,000,000,000)

created
- the timestamp of when your account was created stored in ms
  eg. 1712792411288

key
- your account token

system
- the operating system your account was made with
  eg. originOS
  
sys.currency
- the number of rotur credits you have
> your credits cannot go into negatives and you cannot have below 0.01 of a credit
  eg. 14.35

sys.friends
- Array of rotur usernames that are your friends
  eg. ["throwaway", "rm"]

sys.requests
- Array of rotur usernames that have asked you to be friends with them
  eg. ["temp"]

sys.badges
- Array of badge names
  eg. ["originOS", "rotur", "creator", "discord", "friendly"]

sys.purchases
- Array of item ids that you own
  eg. ["c4068074d5ed5bfcae9a91874383dab9","9a5d1aeafd96a7570f6f39742f1cd1d4"]

sys.total_logins
- the number of times you have logged into rotur
  eg. 106

sys.transactions
- Array of previous transaction information with Rotur Credits
  eg. ["+1.64 from rotur", "-2 to temp"]

sys.used_systems
- Array of all rotur systems you have logged into (broken currently)
  eg. ["originOS", "constellinux"]
```

### Writable

```
private
- whether to hide your account publically (boolean)
  eg. true
  
pfp
- special key allows you to set it but is always a fixed value of "https://avatars.rotur.dev/your_username"
> what? well when you set pfp it uploads the value to our profile picture provider meaning you can always just use the username to get the profile picture
  eg. https://avatars.rotur.dev/mist or https://avatars.rotur.dev/MiSt

theme
- an object of colours useful for conforming your ui to the user's preference
  eg. {
    "primary": "#111111",
    "secondary": "#333333",
    "tertiary": "#555555",
    "text": "#ffffff",
    "background": "#000000",
    "accent": "#57cdac"
  }
  
wallpaper
- A url that should be used as the user's wallpaper on the desktop
> ive found that pexels is a pretty good website for this since they dont enforce cors
  eg. https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg
  
discord_id
- the id of the discord account linked to this rotur account. Allows account management through roturBOT.
  eg. "603952506330021898"
```

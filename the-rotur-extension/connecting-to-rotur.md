# Connecting to Rotur

## Connecting with the extension!

Connecting to Rotur is incredibly easy using the rotur extension, simply run the blocks below

![block\_26\_07\_2024-22\_59\_37](https://github.com/user-attachments/assets/7056b35a-3f19-4ac9-8c26-942ce9e1492d)

You can find the Rotur extension on my gallery here: https://extensions.mistium.com/

### Version 4, (which most of the docs are for, is only available in the originOS or the Rotur discord server)

## Connecting using cloudlink (less efficient)

Connecting to Rotur with cloudlink is significantly harder

You will need the cloudlink extension

### Getting the cloudlink extension

It is recommended (by me (mistium)) to use my version of the cloudlink extension since it has two extra custom blocks that make it significantly easier to handle packets, and has a bug where it doesnt remove online users when they disconnect, fixed (shown below)

![Screenshot 2024-06-29 at 21 13 47](https://github.com/RoturTW/documentation/assets/92952823/ff4498fd-b75b-4ec5-ad1b-7ebb4dab81ca)

This version does only work with turbowarp

https://github.com/Mistium/extensions.mistium/blob/main/files/Cloudlink4\_Improved.js

***

If you just want to use the default cloudlink extension, it can be found below:

These are supported on penguinmod, turbowarp, adacraft and epiques https://github.com/MikeDev101/cloudlink/tree/master/scratch

### Connect to the right server

You should connect to "wss://rotur.mistium.com"\
![block\_29\_06\_2024-21\_27\_37](https://github.com/RoturTW/documentation/assets/92952823/1f5d4fdf-1ddb-4ecd-9b2d-35e6cfa0f611)

### What room should I use?

you should use \["roturTW"] in the connect to rooms block\
![block\_29\_06\_2024-21\_27\_49](https://github.com/RoturTW/documentation/assets/92952823/eea9f7d1-d657-4df5-84d1-8b3e07291a38)

### Example code

This is a working connection script

![block\_29\_06\_2024-22\_48\_06](https://github.com/RoturTW/documentation/assets/92952823/7975e06d-185a-4aa2-a163-b81d48d838cc)

The base payload block will be the template for every packet you send, just add a few keys to it, this will be explained later in the packet structure section

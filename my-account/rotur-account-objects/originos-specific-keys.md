# originOS specific keys

```
onboot
- an array of app paths that should be loaded on boot by originOS
  eg. [
    "Origin/(A) System/System Apps/Desktop.osl",
    "Origin/(A) System/Docks/Dock.osl",
    "Origin/(A) System/System Apps/Quick_Settings.osl"
  ]

hostOS
- the os that the user last logged in on
  eg. macOS

timezone
- the current user's timezone
  eg. UTC+0

proxy
- a cors proxy that the user can configure that apps in the operating system can use to make requests through
  eg. https://apps.mistium.com/cors?url=

wallpaper_mode
- how the os should render the wallpaper, can be any of ["Fill", "Center", "Fit", "Stretch"]
  eg. "Fill"
  
scroll_speed
- how fast the mouse should scroll
  eg -1.2
  
origin_dock
- an array of dock modules for the origin dock to render
  eg. [
    "Origin/(A) System/Docks/Modules/main.ode",
    "Origin/(A) System/Docks/Modules/applications.ode",
    "Origin/(A) System/Docks/Modules/time.ode",
    "Origin/(A) System/Docks/Modules/battery.ode"
  ]
```

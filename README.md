cordova-platform-ready
===

This is a small module that provides a single API for executing code either after Cordova initializes or after the window loads, if running as a webpage.

Usage
---

```
function initialize () {
  // This code will be executed when the device is ready or the window loads
}

require('cordova-platform-ready').ready(initialize)
```

You can also queue up multiple callbacks to be executed:

```
const cordovaPlatformReady = require('cordova-platform-ready')

cordovaPlatformReady.ready(cb1)
cordovaPlatformReady.ready(cb2)
```

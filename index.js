'use strict'

class Platform {
  constructor () {
    this.windowLoadListenderAttached = false
    this.isReady = false
    this.readyCallbacks = []

    let waitForWindow = () => {
      this.windowLoadListenderAttached = true
      window.addEventListener('load', onWindowLoad, false)
    }

    let onWindowLoad = () => {
      if (window.cordova) {
        document.addEventListener('deviceready', onDeviceReady, false)
      } else {
        onDeviceReady()
      }
      if (this.windowLoadListenderAttached) {
        window.removeEventListener('load', onWindowLoad, false)
      }
    }

    let onDeviceReady = () => {
      this.isReady = true
      this.readyCallbacks.forEach((cb) => { cb() })
      this.readyCallbacks = []
    }

    // Wait for window to load before listening for deviceready
    if (document.readyState === 'complete') {
      onWindowLoad()
    } else {
      waitForWindow()
    }
  }

  ready (cb) {
    if (this.isReady) {
      cb()
    } else {
      this.readyCallbacks.push(cb)
    }
  }
}

// Expose `Platform` as a node module
module.exports = new Platform()


// as soon as there is a change, throttle func is called, then after the specified delay, if there is another change throttle func called again

// testing
// export const updateThrottleText = throttle(text => {
//   throttleText.textContent = text
// })


export function throttle(callback, delay = 1000) {
  let isWaiting = false
  // save new args received while waiting so we can call callback once done waiting
  let waitingArgs 

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      isWaiting = false // start waiting again if no changes
    } else {
      // if there are changes, invoke callback with waiting args and restart timeout
      callback(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (isWaiting) {
      waitingArgs = args
      return
    }

    callback(...args)
    isWaiting = true
    
    setTimeout(timeoutFunc, delay)
  }
}
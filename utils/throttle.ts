const throttle = (fn, ms)=> {
    let timer
    return function(...args) {
        if (timer) return
        timer = setTimeout(()=>{timer = null}, ms)
        fn.call(this, ...args)
    }
}

export default throttle;
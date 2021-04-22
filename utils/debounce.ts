 const debounce = (fn: any, delay: number = 100) => {
    let timer = null;
    return (...arg) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arg);
        }, delay);
    };
};
export default debounce;
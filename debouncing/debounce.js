const debounce = (fn, delay) => {
    let timeout;

    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout (( ) => {
            fn(...args)

        }, delay)
    }
}

document.getElementById('btn').addEventListener('click', debounce((e) => {
    console.count('click')
}, 1000))
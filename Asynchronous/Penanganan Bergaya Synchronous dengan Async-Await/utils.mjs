function promiseExecute(resolve, reject) {
    setTimeout(() => {
        resolve('Berhasil!')
    }, 5000)
};

export function doSomething() {
    return new Promise(promiseExecute);
};
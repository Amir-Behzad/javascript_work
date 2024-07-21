document.querySelector('html').addEventListener('keydown', e => {
    if (e.repeat == true) {
        console.log(`release the key ${e.key}`)
    } else {
        console.log(e.key)
    }
})
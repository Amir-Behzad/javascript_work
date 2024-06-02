function makeAppender(suffix) {
    return function (text) {
        return text + suffix;
    };
}

let exciting =  makeAppender('!!!');
let puzzling = makeAppender('???');
console.log(exciting('Hello world'));
console.log(puzzling('Is it real'));
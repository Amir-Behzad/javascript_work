function makeAppender(suffix) {
    return function (text) {
        return text + suffix;
    };
}

let exciting =  makeAppender('!!!');
let puzzling = makeAppender('???');
let pending = makeAppender('...');

console.log(exciting('Hello world'));
console.log(puzzling('Is it real'));
console.log(pending('Excepteur ea veniam ullamco duis magna ut irure ea nulla nulla.'));
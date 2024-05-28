function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total
}

sum = sum(1, 2, 3, 1);
console.log(`sum: ${sum}`);
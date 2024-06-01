let milk = {
    name: 'Milk',
    unit: 'litr',
    prince: 9
};
let sugar = {
    name: 'Sugar',
    unit: 'kg',
    price: 16
};
let banana = {
    name: 'Banana',
    unit: 'kg',
    price: 18
};
let iceCream = {
    name: 'Ice Cream',
    unit: 'kg',
    price: 20
};

// let expensive = [];
let shoppingList = [milk, sugar, banana, iceCream];
let found = shoppingList.filter(item => item.price > 15);
console.log('Expensive Items:')
for (let item of found) {
    console.log(`${item.name}: $${item.price}`);
}
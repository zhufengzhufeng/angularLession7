function coffee() {
    console.log('这是一杯咖啡');
}

function sweetCoffee() {
    console.log('加糖');
    coffee();
}
function milkCoffee() {
    console.log('加牛奶');
    sweetCoffee()
}
coffee();
const orderDisplay = document.getElementById('orderDisplay');

const salesTaxRate = 0.045;

class Item {
    constructor (name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    totalPrice () {
        let totalPrice = this.price*this.quantity;
        return totalPrice;
    }
} 


document.getElementById('orderContainer').addEventListener('change',(event) => {
    orderDisplay.innerHTML = 'Your Order:';

    let burger = getInformation('Burger', 12.99, 'burgerQuantityValue');
    let rockinCombo = getInformation('Rockin Combo', 4.99, 'rockinComboQuantityValue');
    let cheeseBurger = getInformation('Cheese Burger', 15.99, 'cheeseBurgerQuantityValue');
    let friedPickles = getInformation('Fried Pickles', 15.99, 'friedPicklesQuantityValue');
    let chickenFries = getInformation('Chicken Fries', 15.99, 'chickenFriesQuantityValue');
    let lilDawgs = getInformation('Lil Dawgs', 15.99, 'lilDawgsQuantityValue');
    let drPepper = getInformation('Dr Pepper', 15.99, 'drPepperQuantityValue');
    let lemonade = getInformation('Lemonade', 15.99, 'lemonadeQuantityValue');
    let juiceThatMakesYourHeadExplode = getInformation('Juice That Makes Your Head Explode', 15.99, 'juiceThatMakesYourHeadExplodeQuantityValue');
    let fiveLavaCakes = getInformation('Five Lava Cakes', 15.99, 'fiveLavaCakesQuantityValue');
    let coolEpicBreadSticks = getInformation('Cool Epic Bread Sticks', 15.99, 'coolEpicBreadSticksQuantityValue');
    let packaPunch = getInformation('Packa Punch', 15.99, 'packaPunchQuantityValue');

    let items = [
        burger,
        rockinCombo,
        cheeseBurger,
        friedPickles,
        chickenFries,
        lilDawgs,
        drPepper,
        lemonade,
        juiceThatMakesYourHeadExplode,
        fiveLavaCakes,
        coolEpicBreadSticks,
        packaPunch
    ];

    items.forEach((item) => {
        if (item.quantity > 0) {
            orderDisplay.innerHTML += ` <br/> ${item.name}: &dollar;${item.totalPrice().toFixed(2)}`;
        }
    });

    let subtotal = 0;
    for (let i in items) {
        if (isNaN(items[i].quantity)) {continue;}
        subtotal += parseFloat(items[i].totalPrice());
    }
    const tax = subtotal*salesTaxRate;
    const total = subtotal+tax;
    if (orderDisplay.innerHTML !== 'Your Order:') {
        orderDisplay.innerHTML += `<br/><br/> Subtotal: &dollar;${(subtotal).toFixed(2)}`;
        orderDisplay.innerHTML += `<br/> Tax: &dollar;${(tax).toFixed(2)}`;
        orderDisplay.innerHTML += `<br/> Order Price: &dollar;${(total).toFixed(2)}`;
    }
});

function getInformation (name,price,quantity) {
    const quantityValue = parseInt(document.getElementById(quantity).value);
    let item = new Item(name, quantityValue, price);
    return item;
}
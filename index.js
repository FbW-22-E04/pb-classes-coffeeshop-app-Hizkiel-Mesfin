class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = "Asmara Sweet";
    this.menu = [
      { item: "Machiato", type: "drink", price: 12 },
      { item: "Cheese Cake", type: "food", price: 15 },
      { item: "Capiccino", type: "drink", price: 9 },
      { item: "Orange Juice", type: "drink", price: 8 },
      { item: "Panino", type: "food", price: 20 },
    ];
    this.orders = [];
  }

  addOrder(...item) {
    return this.menu.forEach((el) => {
      item.includes(el.item.toLowerCase())
        ? this.orders.push(el)
        : "This item is currently unavailable";
    });
  }

  fulfillOrder() {
    if (this.orders.length > 0) {
      return `The ${this.orders[0].item} is ready!`;
    } else {
      return "All orders have been fulfilled";
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    return this.orders.reduce((acc, next) => acc + next.price, 0).toFixed(2);
  }

  cheapestItem() {
    return this.menu.reduce((acc, next) =>
      acc < next.price ? acc : next.price
    );
  }

  drinkOnly() {
    const drinks = [];
    this.menu.forEach((el) =>
      el.type === "drink" ? drinks.push(el.item) : drinks
    );
    return drinks;
  }

  foodOnly() {
    const food = [];
    this.menu.forEach((el) => (el.type === "food" ? food.push(el.item) : food));
    return food;
  }
}

const test = new CoffeeShop();
const chris = new CoffeeShop();

console.log("Add order:", test.addOrder("panino", "machiato"));
console.log("Fullfill:", test.fulfillOrder());
console.log("List:", test.listOrders());
console.log("Amount:", test.dueAmount());
console.log("cheapest:", test.cheapestItem());
console.log("Only drinks", test.drinkOnly());
console.log("Only food", test.foodOnly());
console.log(test);

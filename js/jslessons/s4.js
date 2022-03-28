class Pizza {
    // constructors
    constructor(toppings = [], customer) {
      this.toppings = toppings;
      this.customer = customer;
    }
    // static property
    static extraToppings = ["Pepperoni", "Corn"];
    // static method
    static sayThankyou() {
      console.log("ThankYou!!!");
    }
    // instance variable
    slices = 10;
  
    get noOfSlices() {
      return this.slices;
    }
    set noOfSlices(value) {
      // slices = value;
      this.slices = value;
    }
    eat() {
      console.log(this.toppings);
      console.log(this.customer);
    }
    // instance method
    getCokeOrPepsi = () => {
      console.log("Coke");
      console.log("Pepsi");
      console.log(this);
    };
    // private fields can only be modified inside the class
    #bankBalance = 10000;
  
    get balance() {
      return this.#bankBalance;
    }
    set balance(value) {
      this.#bankBalance = value;
    }
  }
  const myLunch = new Pizza(["Olives", "Chicken", "Cheese"], "Keshav");
  console.log(myLunch);
  // myLunch.eat();
  myLunch.toppings = ["Carrot", "Almonds", "Lobster"];
  console.log(myLunch.toppings);
  console.log(Pizza.extraToppings);
  Pizza.extraToppings = ["Onions", "Lettuce"];
  console.log(Pizza.extraToppings);
  Pizza.sayThankyou();
  console.log(myLunch.noOfSlices);
  myLunch.noOfSlices = 6;
  console.log(myLunch.noOfSlices);
  myLunch.getCokeOrPepsi();
  myLunch.slices = 12;
  console.log(myLunch.noOfSlices);
  
  console.log(myLunch.balance);
  myLunch.balance = 5000;
  console.log(myLunch.balance);
  // myLunch.#bankBalance = 2000;
  // console.log(myLunch.balance)
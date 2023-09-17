//Import the class Currency from 3-currency.js
import Currency from "./3-currency";


export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw TypeError("Amount must be a number");
    }
    if (!(currency instanceof Currency)) {
      throw TypeError("Currency must be a Currency");
    }
    this._amount = amount;
    this._currency = currency;
  }

  //Implement a getter for the attribute amount
  get amount() {
    return this._amount;
  }

  //Implement a getter for the attribute currency
  get currency() {
    return this._currency;
  }

  //Implement a setter for the attribute amount
  set amount(amount) {
    if (typeof amount !== "number") {
      throw TypeError("Amount must be a number");
    }
    this._amount = amount;
  }

  //Implement a setter for the attribute currency
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError("Currency must be a Currency");
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number") {
      throw TypeError("Amount must be a number");
    }
    if (typeof conversionRate !== "number") {
      throw TypeError("ConversionRate must be a number");
    }
    return amount * conversionRate;
  }
}

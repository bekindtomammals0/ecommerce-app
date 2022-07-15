import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone 11", price: 12000, quantity: 0 },
      { id: 2, productName: "iPad", price: 12000, quantity: 0 },
      { id: 3, productName: "iMac", price: 50000, quantity: 0 },
      { id: 4, productName: "Macbook", price: 27000, quantity: 0 },
      { id: 5, productName: "Macbook Air", price: 25000, quantity: 0 },
      { id: 6, productName: "iPhone X", price: 8900, quantity: 0 },
      { id: 7, productName: "iPhone 13", price: 13000, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                productName={prod.productName}
                price={prod.price}
                quantity={prod.quantity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

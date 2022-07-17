import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //executes when the component is mounted
  constructor(props) {
    console.log("constructor(props) of ShoppingCart.jsx");
    super(props); //call super class's constructor
    //initialize the state inside constructor
    this.state = {
      products: [
        { id: 1, productName: "iPhone 11", price: 12000, quantity: 0 },
        // { id: 2, productName: "iPad", price: 12000, quantity: 0 },
        // { id: 3, productName: "iMac", price: 50000, quantity: 0 },
        // { id: 4, productName: "Macbook", price: 27000, quantity: 0 },
        // { id: 5, productName: "Macbook Air", price: 25000, quantity: 0 },
        // { id: 6, productName: "iPhone X", price: 8900, quantity: 0 },
        // { id: 7, productName: "iPhone 13", price: 13000, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render() of ShoppingCart.jsx");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                //these are properties('props') of Product Component
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  //executes after constructor and render method
  //(include life cycle of child components, if any) of current component
  componentDidMount() {
    console.log("componentDidMount() of ShoppingCart.jsx");
    //fetch datasets
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate() of ShoppingCart.jsx",
      prevProps,
      prevState,
      this.props,
      this.state
    );

    // if (prevProps.x != this.props.x) {
    //   //make http call
    // }
  }

  //executes when crrent instance of current component
  //is being deleted from memory
  componentWillUnmount() {
    console.log("componentWillUnmount() of ShoppingCart.jsx");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch() of ShoppingCart.jsx");
    console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }
  //executes when onIncrement event is fired
  //which fires when '+' button is clicked
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      //update state of parent('this') component
      this.setState({ products: allProducts });
    }

    //this.setState(() => (product.quantity += 1));
  };

  //executes when onDecrement event is fired
  //which fires when '-' button is clicked
  handleDecrement = (product, minValue) => {
    //works the same as handleIncrement
    if (product.quantity > minValue) {
      //update state of parent('this') component
      this.setState(() => (product.quantity -= 1));
    }
  };

  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete this item?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update state of parent('this') component
      this.setState({
        products: allProducts,
      });
    }
  };
}

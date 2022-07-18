import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //executes when the component is mounted
  constructor(props) {
    console.log("constructor(props) of ShoppingCart.jsx");
    super(props); //call super class's constructor
    //initialize the state inside constructor
    this.state = {
      products: [],
    };
  }

  render() {
    console.log("render() of ShoppingCart.jsx");
    return (
      <div className="container-fluid">
        <h4 className="mt-2">Shopping Cart</h4>
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
  componentDidMount = async () => {
    console.log("componentDidMount() of ShoppingCart.jsx");
    //fetch datasets from data source during componentDidMount
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    var prods = await response.json();
    this.setState({ products: prods });
  };

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

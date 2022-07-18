import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor() of Product.jsx");

    this.state = {
      product: this.props.product,
    };
  }

  render() {
    console.log("render() of Product.jsx");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-5 border-top">
              {this.state.product.productName}
            </h5>
            <div>Php {this.state.product.price} </div>
          </div>
          <div className="card-footer">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 5);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount() of Product.jsx");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() of Product.jsx");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() of Product.jsx");
  }
}

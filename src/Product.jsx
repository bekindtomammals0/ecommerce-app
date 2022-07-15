import React, { Component } from "react";

export default class Product extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="card m-4">
        <div className="card-body">
          <div className="text-muted"># {this.props.id}</div>
          <h5 className="pt-5 border-top">{this.props.productName}</h5>
          <div>Php {this.props.price} </div>
        </div>
      </div>
    );
  }
}

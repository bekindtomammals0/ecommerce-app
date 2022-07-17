import React, { Component } from "react";
export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "BCLB",
        phone: "123123",
        address: { city: "Baybay City", state: "Leyte" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Suma1l",
        phone: "222222",
        address: { city: "Tacloban City", state: "Leyte" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "W1sh-",
        phone: "333333",
        address: { city: "Ormoc City", state: "Leyte" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "electric",
        phone: null,
        address: { city: "Cebu City", state: "Cebu" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Entra",
        phone: null,
        address: { city: "Albuera", state: "Leyte" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2 badge-bg">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone No</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Customers Refresh Button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    return phone ? phone : <div>N/A</div>;
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust);
                }}
              >
                Change picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>{cust.address.state}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks "Change Picture" button in the grid
  //Receives the customer object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //manual way of chaning picture
    cust.photo = "https://picsum.photos/id/120/60";
    this.setState(() => cust.photo);
    console.log(index);

    //get existing customer dynamically
    //var custArr = this.state.customers;
    //custArr[index].photo = "https://picsum.photos/id/120/60";

    //update "customers" array in the state
    //this.setState({ customers: custArr });
  };
}

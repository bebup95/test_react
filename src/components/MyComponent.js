// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    ListUsers: [
      { id: 1, name: "le quang minh nhat", age: 18 },
      { id: 2, name: "tran ngoc phat", age: 19 },
      { id: 3, name: "mai cong thanh", age: 20 },
      { id: 4, name: "huynh nguyen lam son", age: 21 },
    ],
  };

  handleAddUser = (user) => {
    console.log(user);
    this.setState({
      ListUsers: [user, ...this.state.ListUsers],
    });
  };

  render() {
    return (
      <>
        <AddUserInfor handleAddUser={this.handleAddUser} />
        <br></br>
        <DisplayInfo ListUsers={this.state.ListUsers} />
      </>
    );
  }
}

export default MyComponent;

/**
 * có thể dùng tailwind và styled-components để viết hẳn css vào file jsx
 */

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
            <div>
                <AddUserInfor handleAddUser={this.handleAddUser} />
                <br></br>
                <DisplayInfo ListUsers={this.state.ListUsers} />
            </div>
        );
    }
}

export default MyComponent;

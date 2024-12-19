// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
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
    render() {
        return (
            <div>
                <UserInfo />
                <br></br>
                <DisplayInfo ListUsers={this.state.ListUsers} />
            </div>
        );
    }
}

export default MyComponent;

// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    render() {
        const myInfo = { name: "Yeat", age: 29 };
        const { name, age } = myInfo;
        return (
            <div>
                <UserInfo />
                <br></br>
                <DisplayInfo name="nhat" age="18" />
                <hr></hr>
                <DisplayInfo name={name} age={age} />
            </div>
        );
    }
}

export default MyComponent;

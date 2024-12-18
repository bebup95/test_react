// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "CyBot",
        address: "Dong Nai",
        age: 21,
    };
    //JSX

    handleMouse(event) {
        console.log(event);
        console.log(">> Clicked");
    }

    Hovered(event) {
        console.log(event.pageX);
        console.log(">> Hovered");
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <div>
                    <button onClick={this.handleMouse}>Click Me !</button>
                    <button onMouseOver={this.Hovered}>Hover Me !</button>
                </div>
            </div>
        );
    }
}

export default MyComponent;

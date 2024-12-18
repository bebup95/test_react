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
        console.log(this.state.name);
        console.log(">> Clicked");
        this.setState({
            name: "Nhat Le",
            age: Math.floor(Math.random() * 100) + 1,
        });
    }

    Hovered(event) {
        // console.log(event.pageX);
        // console.log(">> Hovered");
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <div>
                    <button
                        onClick={(event) => {
                            this.handleMouse(event);
                        }}
                    >
                        Click Me !
                    </button>
                    <button onMouseOver={this.Hovered}>Hover Me !</button>
                </div>
            </div>
        );
    }
}

export default MyComponent;

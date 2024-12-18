// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "CyBot",
        address: "Dong Nai",
        age: 21,
    };

    handleMouse(event) {
        console.log(this.state.name);
        console.log(">> Clicked", event.target);
        this.setState({
            name: "Nhat Le",
            age: Math.floor(Math.random() * 100) + 1,
        });
    }

    Hovered(event) {
        // console.log(event.pageX);
        // console.log(">> Hovered");
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form
                    onSubmit={(event) => {
                        this.handleSubmit(event);
                    }}
                >
                    <input
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeInput(event);
                        }}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;

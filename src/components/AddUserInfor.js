import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "Dong Nai",
    age: "",
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <>
        My name is {this.state.name} and I'm {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit!</button>
        </form>
      </>
    );
  }
}

export default AddUserInfor;

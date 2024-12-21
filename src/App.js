import "./App.scss";
import React from "react";
import MyComponent from "./components/MyComponent";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        Hello World Le Quang Minh Nhat
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;

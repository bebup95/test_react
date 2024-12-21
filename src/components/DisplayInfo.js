import React from "react";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component {
  state = {
    isShowHide: true,
  };

  handleHideShow = () => {
    return this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  render() {
    const { ListUsers } = this.props;
    return (
      <div className="display-infor-container">
        <button
          onClick={() => {
            this.handleHideShow();
          }}
        >
          {this.state.isShowHide === true
            ? "Click Me To Hide List Users Detail"
            : "Click Me To Show List Users Detail"}
        </button>

        {this.state.isShowHide && (
          <div>
            {ListUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className={user.age % 2 === 0 ? "green" : "red"}
                >
                  <div> My name's {user.name}</div>
                  <div> My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;

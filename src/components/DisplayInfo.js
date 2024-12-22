import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  
  constructor(props){
    console.log('>>> start constructor !!!')
    super(props)
    this.state = {
      isShowHide: true,
    };
  }

  componentDidMount() {
    console.log('>>> component did mount !!!')
    setTimeout(() => {
      document.title = 'Anh Nhat dep trai'
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('>>> start did update !!!', this.props, prevProps)
    if(this.props.ListUsers !== prevProps.ListUsers){
      if (this.props.ListUsers.length === 5){
        alert('u got 5 users')
      }
    }
  }

  handleHideShow = () => {
    return this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  render() {
    console.log(">>> start render !!!")
    const { ListUsers } = this.props;
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
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
          <>
            {ListUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className={user.age % 2 === 0 ? "green" : "red"}
                >
                  <div> My name's {user.name}</div>
                  <div> My age's {user.age}</div>

                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;

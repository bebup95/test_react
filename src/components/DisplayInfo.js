import React from "react";

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
            <div>
                <button
                    onClick={() => {
                        this.handleHideShow();
                    }}
                >
                    Click Me To Hide List Users Detail
                </button>

                {this.state.isShowHide && (
                    <div>
                        {ListUsers.map((user) => {
                            return (
                                <div
                                    key={user.id}
                                    className={
                                        user.age % 2 === 0 ? "green" : "red"
                                    }
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

    // <div>
    //     My name's {name}
    //     <br />
    //     My age's {age}
    // </div>
}

export default DisplayInfo;

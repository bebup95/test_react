import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const { ListUsers } = this.props;
        return (
            <div>
                {ListUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div> My name's {user.name}</div>
                            <div> My age's {user.age}</div>
                            <hr />
                        </div>
                    );
                })}
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

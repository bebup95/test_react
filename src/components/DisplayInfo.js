import React from "react";

class DisplayInfo extends React.Component {
    render() {
        console.log(this.props);
        const { name, age } = this.props;
        return (
            <div>
                My name's {name}
                <br />
                My age's {age}
            </div>
        );
    }
}

export default DisplayInfo;

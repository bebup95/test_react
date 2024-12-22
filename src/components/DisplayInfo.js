import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

//stateless (kh co state) and stateful (co state)
// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>> start render !!!");
//     const { ListUsers } = this.props;
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {ListUsers.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={user.age % 2 === 0 ? "green" : "red"}
//                 >
//                   <div> My name's {user.name}</div>
//                   <div> My age's {user.age}</div>

//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { ListUsers } = props; //obj

  return (
    <div className="display-infor-container">
      {true && (
        <>
          {ListUsers.map((user) => {
            return (
              <div
                key={user.id}
                className={user.age % 2 === 0 ? "green" : "red"}
              >
                <div> My name's {user.name}</div>
                <div> My age's {user.age}</div>

                <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfo;

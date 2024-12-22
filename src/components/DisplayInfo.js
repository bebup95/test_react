import React, { useState } from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

//stateless (kh co state) and stateful (co state)

const DisplayInfo = (props) => {
  const { ListUsers } = props; //obj

  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUsers === true ? "Hide List Users" : "Show List Users"}
        </span>
      </div>
      {isShowHideListUsers && (
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

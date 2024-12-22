// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfo from "./DisplayInfo";

const MyComponent = () => {
  const [ListUsers, setListUsers] = useState([
    { id: 1, name: "le quang minh nhat", age: 18 },
    { id: 2, name: "tran ngoc phat", age: 19 },
    { id: 3, name: "mai cong thanh", age: 20 },
    { id: 4, name: "huynh nguyen lam son", age: 21 },
  ]);

  const handleDeleteUser = (user) => {
    let NewListUsers = [...ListUsers];
    NewListUsers = NewListUsers.filter((item) => item.id !== user);
    setListUsers(NewListUsers);
  };
  const handleAddUser = (user) => {
    setListUsers([user, ...ListUsers]);
  };
  return (
    <>
      <br />
      <div className="a">
        <AddUserInfor handleAddUser={handleAddUser} />
        <br></br>
        <DisplayInfo
          ListUsers={ListUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>

      <div className="b"></div>
    </>
  );
};

export default MyComponent;

/**
 * có thể dùng tailwind và styled-components để viết hẳn css vào file jsx
 */

import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [UserInfor, setUserInfor] = useState({
    name: "",
    address: "Dong Nai",
    age: "",
  });

  const handleOnChangeInput = (event) => {
    setUserInfor({
      ...UserInfor,
      name: event.target.value,
    });
  };

  const handleOnChangeAge = (event) => {
    setUserInfor({
      ...UserInfor,
      age: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: UserInfor.name,
      age: UserInfor.age,
    });
  };

  return (
    <>
      My name is {UserInfor.name} and I'm {UserInfor.age}
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>Your name: </label>
        <input
          value={UserInfor.name}
          type="text"
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        />

        <label>Your age: </label>
        <input
          value={UserInfor.age}
          type="text"
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <button>Submit!</button>
      </form>
    </>
  );
};

export default AddUserInfor;

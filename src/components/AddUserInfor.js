import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  // const [address, setaddress] = useState("Dong Nai");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <>
      My name is {name} and I'm {age}
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        />

        <label>Your age: </label>
        <input
          value={age}
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

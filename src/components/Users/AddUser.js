import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }

    console.log(username, age);
    setUsername("");
    setAge("");
  };

  const userNameChangehandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangehandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={userNameChangehandler}
        ></input>
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={ageChangehandler}
        ></input>
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

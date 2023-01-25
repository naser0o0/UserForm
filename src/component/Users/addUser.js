/** @format */

import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");


  function usernameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');

  }


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler} value={enteredUserName} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='text' onChange={ageChangeHandler} value={enteredAge} />
        <Button type='submit' onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
}

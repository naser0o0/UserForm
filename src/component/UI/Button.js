/** @format */

import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <div
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

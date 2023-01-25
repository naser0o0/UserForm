/** @format */

import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  // props.className wurde in AddUser Component card mit props gestylt  
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}

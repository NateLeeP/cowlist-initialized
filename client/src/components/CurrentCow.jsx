import React from "react";
import CowUpdate from './CowUpdate.jsx';
var CurrentCow = ({cow, requestCows}) => (
  <div>
  <h3> {cow.name} </h3>
  <p> {cow.description} </p>
  <CowUpdate cow={cow} requestCows={requestCows} />
  </div>
);

export default CurrentCow;
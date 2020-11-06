import React from "react";
import Cow from "./Cow.jsx";

var CowList = ({cows, handleCowChange, requestCows}) => (
  // props should be array of cows
  <div>
    {cows.map((cow) => (
      <Cow cow={cow} handleCowChange={handleCowChange} requestCows={requestCows} />
    ))}
  </div>
)

export default CowList;
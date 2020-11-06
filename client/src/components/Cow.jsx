import React from 'react';
import DeleteButton from './DeleteButton.jsx';

var Cow = ({cow, handleCowChange, requestCows}) => (

  <div onClick={() => {handleCowChange(cow)}}>
    {cow.name}
  <DeleteButton cow={cow} requestCows={requestCows} />
  </div>
);

export default Cow;
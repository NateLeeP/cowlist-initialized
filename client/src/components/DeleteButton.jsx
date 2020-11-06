import React from 'react'
import axios from 'axios'


var DeleteButton = ({cow, requestCows}) => {
  var handleSubmit = (e) => {
    e.preventDefault();
    axios.delete('/api/cows:' + cow.id)
    .then(() => {
      requestCows();
    })
    .catch((err) => {
      console.log("Error with delete axios! Error:", err)
    })
  }

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>Delete Cow</button>
    </div>
  )

}

export default DeleteButton;
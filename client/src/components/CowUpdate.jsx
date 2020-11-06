import React from "react";
import axios from "axios";
class CowUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'description':''
    }
  }

  handleNameChange(e) {
    this.setState({'name':e.target.value})
  }

  handleDescriptionChange(e) {
    this.setState({'description':e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let cowID = this.props.cow.id;
    axios.put('/api/cows:' + cowID, {
      name: this.state.name,
      description: this.state.description
    })
    .then(() => {this.props.requestCows()})
    .catch((err) => {
      console.log("Error with 'handleSubmit' function! Error:", err)
    })
  }


  render() {
    return (
      <div>
        <form>
          <label for="fname" >Update Name?</label>
          <input type="text" id="fname" name="fname" onChange={this.handleNameChange.bind(this)} />
          <label for="lname">Update Description?</label>
          <input type="text" id="lname" name="lname" onChange={this.handleDescriptionChange.bind(this)} />
          <button type="submit" onClick={this.handleSubmit.bind(this)}>Update Cow</button>
        </form>
      </div>
    )
  }
};

export default CowUpdate;
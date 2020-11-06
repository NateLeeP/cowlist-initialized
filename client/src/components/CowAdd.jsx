import React from "react";


class CowAdd extends React.Component {
  // class component to keep track of name and description
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }
  handleChangeName(event) {
    // event.target.value
    this.setState({name: event.target.value});
    event.preventDefault();
  }

  handleChangeDescription(event) {
    // event.target.value
    this.setState({description: event.target.value});
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.name, this.state.description);
  }

  render() {
    return (
      <form>
      <label for="cowName">Name: </label>
      <input type="text" id="cowName" name="cowName" onChange={this.handleChangeName.bind(this)}/>
      <label for="cowDescription">Description: </label>
      <input type="text" id="cowDescription" name="cowDescription" onChange={this.handleChangeDescription.bind(this)}/>
      <input type = 'submit' value='Submit' onClick={this.handleSubmit.bind(this)}/>
    </form>
    );
  }

}

export default CowAdd;
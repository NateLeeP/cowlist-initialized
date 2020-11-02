import React from "react";
import ReactDOM from "react-dom";

var staticCows = [{'name':'Buttercup', 'description':'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous, and generally avoided by livestock'}, {'name':'Daisey', 'description':'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties'}];

var Cow = ({cow}) => (

    <div>
      {cow.name}
    </div>
);

var CowList = ({cows}) => (
  // props should be array of cows
  <div>
    {cows.map((cow) => (
      <Cow cow={cow} />
    ))}
  </div>
)

// Need a component for inserting cows.

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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: staticCows
    }
  }

  handleSubmission(name, description) {
    this.setState((state, props) => (
      state.cows.push({name:name, description:description})
    ))
    console.log(this.state.cows);
  }

  render() {
    return (
    <div>
    <CowAdd handleFormSubmit={this.handleSubmission.bind(this)} />
    <CowList cows={this.state.cows}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);
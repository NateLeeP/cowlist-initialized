import React from "react";
import ReactDOM from "react-dom";

var staticCows = [{'name':'Buttercup', 'description':'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous, and generally avoided by livestock'}, {'name':'Daisey', 'description':'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties'}];

var CurrentCow = ({cow}) => (
  <div>
  <h3> {cow.name} </h3>
  <p> {cow.description} </p>
  </div>
);

var Cow = ({cow, handleCowChange}) => (

    <div onClick={() => {handleCowChange(cow)}}>
      {cow.name}
    </div>
);

var CowList = ({cows, handleCowChange}) => (
  // props should be array of cows
  <div>
    {cows.map((cow) => (
      <Cow cow={cow} handleCowChange={handleCowChange} />
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
      cows: staticCows,
      currentCow: staticCows[0]
    }
  }

  handleSubmission(name, description) {
    this.setState((state, props) => (
      state.cows.push({name:name, description:description})
    ))
    console.log(this.state.cows);
  }

  handleCowChange(cow) {
    this.setState({currentCow: cow});
  }

  render() {
    return (
    <div>
    <CurrentCow cow={this.state.currentCow} />

    <CowAdd handleFormSubmit={this.handleSubmission.bind(this)} />

    <CowList cows={this.state.cows} handleCowChange={this.handleCowChange.bind(this)}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);
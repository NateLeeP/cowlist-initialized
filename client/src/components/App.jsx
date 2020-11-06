import React from "react";
import axios from "axios";
import CurrentCow from "./CurrentCow.jsx";
import CowList from "./CowList.jsx";
import CowAdd from "./CowAdd.jsx";
var staticCows = [{'name':'Sample Cows', 'description':'Input some cows below!'}];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: staticCows,
      currentCow: staticCows[0]
    }
  }
  requestCows() {
    return axios.get('/api/cows')
    .then((results) => {
      if (results.data.length === 0) {
        throw Error;
      }
      else {
        this.setState({cows:results.data, currentCow:results.data[0]})
      }
    })
    .catch((err) => {
      console.log("Error with request cows function! Are there cows in the database? Error:", err);
    })
  }

  handleSubmission(name, description) {
    axios.post('/api/cows', {name, description})
    .then(() => {this.requestCows()})
    .catch((err) => {
      console.log("Error on 'handle submission' function! Error: ", err);
    })
  }

  handleCowChange(cow) {
    this.setState({currentCow: cow});
  }
  componentDidMount() {
    this.requestCows();
  }

  render() {
    return (
    <div>
    <CurrentCow cow={this.state.currentCow} requestCows={this.requestCows.bind(this)} />

    <CowAdd handleFormSubmit={this.handleSubmission.bind(this)} />

    <CowList cows={this.state.cows} handleCowChange={this.handleCowChange.bind(this)} requestCows={this.requestCows.bind(this)}/>
    </div>
    );
  }
}

export default App;
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
/* Functional component

let App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position.coords.latitude),
    err => console.log(err)
  );

  return <div> Latitude: {App} </div>;
};
*/

// Class component

class App extends React.Component {
  /*
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }
  */

  //Alternative way without constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("component was just updated - it rendered");
  }

  // засунем все в эту функцию, чтобы в конечном рендере всегда отображались красные границы
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latit={this.state.lat} />;
    } /*создаем prop и задаем занчение из state. каждый 
        раз новое значение latitude будет ложиться в сезон
        и сезон обновится и отререндреит детей */

    return <Spinner message="Turn on geolocation pls" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

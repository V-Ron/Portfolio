import React from 'react';

export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }

  componentDidMount(){
    fetch("api.openweathermap.org/data/2.5/weather?q=SAN DIEGO&APPID=4b39ebe3c073f99c2e2f58018846a256")
    .then(results => {
      return results.json();
    }).then(data => {
      let temperature = data.results.map((temp) => {
        return(
          <div key = {temp.results}>
          <h1> {temp.main.temp} </h1>
          </div>
        )
      })
    this.setState({temperature: temperature});
    console.log("state:", this.state.temperature)
    })
  }

  render() {
    return (
      <div>{this.state.temperature}
      </div>
    );
  }
}

import React, { Component } from 'react'
class VisualTime extends Component {

    constructor(props) {
        super(props);
        this.state= {
            time: this.currentTime(),
            interval:null

        }
    }

currentTime() {
  return new Date().toLocaleTimeString();
};

render() {
    return (
        <div className="time" id="time">
            Hello:
            <input />
            <p> Time is:</p>
            <pre>{this.state.time}</pre>
        </div>
    );
}
componentDidMount() {
  this.interval = setInterval(() => this.setState({time: this.currentTime()}), 1000)
}

// componentWillUnMount(){
//   clearInterval(this.interval);
// }
}


export default VisualTime
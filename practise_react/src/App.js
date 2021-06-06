import React, { Component } from 'react'

import './App.css';
import ClickEventOneIncrement from "./components/OneIncrement"
import ClickEventMoreIncrement from "./components/MoreIncrement";
import ClickButtonTextChange from "./components/TextChangeButtonClick"
import ClickGetProfile from "./components/GithubProfilesDisplay"
import ClickGetAPIProfile from "./components/githubapifiles/GithubAPIProfilesDisplay"
import VisualTime from "./components/TimeOnScreen"
const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class App extends Component {
  
  render(){
    return(
      <div classname = "App">
        {/* incrementation logic as component and sending the parameters as props*/}
        <ClickEventOneIncrement name = "Lokesh" />
        {/* Incrementation buttons +1,+2,+3,+5,+10,+50+100 */}
        <ClickEventMoreIncrement />
        <VisualTime />
        <ClickButtonTextChange/>
        <ClickGetProfile datatest = {testData} title = "Github Profiles"/>
        <ClickGetAPIProfile />
        

      </div>
    )
  }

}



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       seconds: parseInt(props.startTimeInSeconds, 10) || 0
//     };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   formatTime(secs) {
//     let hours   = Math.floor(secs / 3600);
//     let minutes = Math.floor(secs / 60) % 60;
//     let seconds = secs % 60;
//     return [hours, minutes, seconds]
//         .map(v => ('' + v).padStart(2, '0'))
//         .filter((v,i) => v !== '00' || i > 0)
//         .join(':');
//   }

//   render() {
//     return (
//       <div>
//         Timer: {this.formatTime(this.state.seconds)}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App startTimeInSeconds="300" />,
//   document.getElementById('timer-example')
// );
export default App;

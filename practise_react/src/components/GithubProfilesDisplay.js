import React, { Component } from 'react'
import Form from "./Form"
import Card from "./Card"
class ClickGetProfile extends Component {
    constructor() {
        super()
        this.state = {
            profiles: this.props,
        }
    }
    
    cardList = (props) => (
        console.log("these are props ",props)
  
    );
render(){
    console.log("props in profiles ",this.props.datatest)
    return (
      <div>
        <div className="header">{this.props.title}</div>
      <Form />
       <div>
  	{this.props.datatest.map(profile => <Card {...profile}/>)}
	</div>
      </div>
  );
}
    }
export default ClickGetProfile
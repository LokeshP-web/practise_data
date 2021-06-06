import React, { Component } from 'react'
import Form from "./Form"
class CardList extends Component {
    constructor() {
        super()
        this.state ={
            profiles: "",
        }
    }
	render() {
        return (
          <div>
            <div className="header">{this.props.title}</div>
          <Form />
          <CardList profiles={this.props} />
          </div>
      );
    }	
}
export default CardList


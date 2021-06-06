import React, { Component } from 'react'
import Form from "./Form_API"
import Card from "./Card_API"
class ClickGetAPIProfile extends Component {
    constructor() {
        super()
        this.state = {
            profiles: [],
        }
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
          profiles: [...prevState.profiles, profileData],
      }));
    };
    
    render() {
        console.log("this props", this.props)
        return (
          <div>
            <div className="header">{this.props.title}</div>
          <Form onSubmit={this.addNewProfile} />
          {/* <CardList profiles={this.state.profiles} /> */}
          <div>
  	{this.state.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
          </div>
      );
    }	
    }
export default ClickGetAPIProfile
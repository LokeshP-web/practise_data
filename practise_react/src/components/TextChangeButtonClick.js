import React, { Component } from 'react'

class ClickButtonTextChange extends Component {
    constructor() {
        super()
        this.state = {
            message: "Please Subscribe",
            status: "Subscribe"
        }
}


changeMessage = () =>{
    if(this.state.status === "Subscribe"){
    this.setState({ message: "Thank you for subscribing", status: "unsubscribe" })
} else{
    this.setState({ message: "Please Subscribe", status: "Subscribe" })
}
}

render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick = {() => this.changeMessage()}>{this.state.status}</button>
        </div>
    )
}
}

export default ClickButtonTextChange
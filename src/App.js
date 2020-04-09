import React from 'react';
import './App.css';
import {app_service} from "./service";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        app_service.getAPIResponse()
        .then((response) => {
            this.setState(response);console.log(this.state)
        });   
    }

    render() {
        return (
            <div className="wrapper">
                <h2>{this.state.type}</h2>
                <h4>{this.state.count}</h4>
            </div> 
        )
    }
}

export default App;

import React from 'react';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentDidMount(){
        fetch("https://api.jsonbin.io/b/5e8d74eb980e481b8aa0c5ca")
            .then((response) => response.json())
            .then((response) => {this.setState(response);console.log(this.state)});   
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

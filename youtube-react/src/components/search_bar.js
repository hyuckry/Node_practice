import React, { Component } from 'react'
import '../style/style.css';

export default class search_bar extends Component {
    constructor(props){
        super(props);

        this.state={term:''}
    }
    render() {
        return (
            <div>
            <input type="text" onChange={event=>this.onInputChange(event.target.value)} 
            />            
            
            </div>
        );       
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchChange(term)
    }
}

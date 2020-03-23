import React from 'react'

export class Welcome extends React.Component{
    properName(){
        return  this.props.lastName + ', '+ this.props.firstName ;
    }
    
    render(){
        return (
        <h1>Hello, {this.properName()}, How are You Today?</h1>
        )
    }
};

export class GoodBye extends React.Component{
    render(){
        return(
            <h1>Goodbye, {this.props.name}, It was a pleasure meeting you!</h1>
        )
    }
};
import React from 'react';
import './line-breaker.sass'

class LineBreaker extends React.Component{
    constructor(props){
        super(props);
        this.style={
            width:props.length,
        }
    }

    render(){
        return(
            <div className="line-breaker" style={this.style}></div>
        )
    }
}

export default LineBreaker;
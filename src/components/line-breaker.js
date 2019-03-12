import React from 'react';
import './line-breaker.scss'

class LineBreaker extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            width: props.length,
        }
        if (props.color == 'white') {
            this.style['background'] = 'rgba(255,255,255,0.2)';
        }
        else if (props.color == 'black') {
            this.style['background'] = 'rgba(0,0,0,0.2)';
        }
    }

    render() {
        return (
            <div className="line-breaker" style={this.style}></div>
        )
    }
}

export default LineBreaker;
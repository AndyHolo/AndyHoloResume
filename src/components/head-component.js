import React from 'react';
import './head-component.sass'

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.headStyle = {
            width: props.headSize,
            height: props.headSize
        }
    }

    render() {
        return (
            <div className="head-component">
                <img className="head-img" src={this.props.imgSrc} style={this.headStyle} alt="headIcon"></img>
            </div>
        )
    }
}

export default Head;
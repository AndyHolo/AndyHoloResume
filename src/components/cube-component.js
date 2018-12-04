import React from 'react'
import './cube.sass';
import getRandomIntInclusive from '../lib'

class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: getRandomIntInclusive(1, 15) + 'em' }
        this.cubeStyle = {
            height: this.state.width,
            width: this.state.width,
            animationDuration: props.duration + 's',
            left: getRandomIntInclusive(0, 95) + '%'
        }
    }

    render() {
        return (
            <div className="cube" style={this.cubeStyle}></div>
        );
    }
}

export default Cube;
import React from 'react';
import './board.scss';
import webBg from '../assets/lerone-pieters-1395410-unsplash.jpg';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentImg: webBg
        };
    }

    toLeft() {
        console.log('toLeft')
    }

    render() {
        return (
            <div className="board">
                <div className="left-arrow" onClick={this.toLeft}></div>
                <div className="content"></div>
                <div className="right-arrow"></div>
            </div>
        )
    }
}
import React from 'react';
import './board.scss';

export class Board extends React.Component {
    toLeft(){
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
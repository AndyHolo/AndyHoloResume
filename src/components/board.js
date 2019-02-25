import React from 'react';
import './board.scss';

export class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="left-arrow"></div>
                <div className="content"></div>
                <div className="right-arrow"></div>
            </div>
        )
    }
}
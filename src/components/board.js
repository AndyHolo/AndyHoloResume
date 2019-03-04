import React from 'react';
import './board.scss';
import bg1 from '../assets/alex-1395165-unsplash.jpg';
import bg2 from '../assets/oakie-1393809-unsplash.jpg';
import bg3 from '../assets/zdenek-machacek-1396821-unsplash.jpg';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrls: [bg1, bg2, bg3],
            index: 0
        };
        this.boardStyle = {
            backgroundImage: 'url(' + this.state.imageUrls[this.state.index] + ')'
        }
    }

    toLeft() {
        console.log('toLeft');
    }

    toRight() {
        console.log('toRight');
        console.log(this.state.index);
        this.setState((state, props) => ({
            index: (state.index + 1) % (state.imageUrls.length)
        }));
        this.boardStyle = {
            backgroundImage: 'url(' + this.state.imageUrls[this.state.index] + ')'
        }
        console.log(this.state.index);
    }

    render() {
        return (
            <div>
                <div className="board" style={this.boardStyle}>
                    <div className="left-arrow" onClick={this.toLeft.bind(this)}></div>
                    <div className="content"></div>
                    <div className="right-arrow" onClick={this.toRight.bind(this)}></div>
                </div>
            </div>
        )
    }
}
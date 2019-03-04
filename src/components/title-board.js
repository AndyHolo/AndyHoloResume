import React from 'react';
import './title-board.scss';

export class Titleboard extends React.Component {
    constructor(props) {
        super(props);
        this.titleBoardStyle = {
            width: props.width,
        }
    }

    render() {
        return (
            <div className="title-board" style={this.titleBoardStyle}>
                <div className="title-board-icon">
                    {this.props.children}
                </div>
                <div className="title-board-content">
                    <p className="title-board-content-text">
                        {this.props.content}
                    </p>
                </div>
            </div>
        )
    }
}

export default Titleboard;
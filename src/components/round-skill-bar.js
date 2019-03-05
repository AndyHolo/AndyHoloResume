import React from 'react';
import './round-skill-bar.scss';

export class RoundSkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: props.roundSize,
            height: props.roundSize
        }
        this.iconStyles = {
            width: props.roundSize,
            height: props.roundSize
        }
    }
    render() {
        return (
            <div className="round-skill">
                <div className="icon" style={this.styles}>
                    <img src={this.props.logoSrc} className="icon-img" style={this.iconStyles}></img>
                </div>
            </div>
        )
    }
}

export default RoundSkillBar;
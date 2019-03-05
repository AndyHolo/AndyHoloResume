import React from 'react';
import './round-skill-bar.scss';

export class RoundSkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: props.roundSize + 'em',
            height: props.roundSize + 'em'
        }
        this.iconStyles = {
            width: props.roundSize + 'em',
            height: props.roundSize + 'em'
        }
        this.labelStyles = {
            lineHeight: (props.roundSize - 1.5) + 'em',
            height: props.roundSize + 'em',
            width: props.barWidth
        }
        this.barContentStyles = {
            width: ((props.skillValue / 100) * 20) + 'em',
            backgroundColor: props.color
        }
    }
    render() {
        return (
            <div className="round-skill">
                <div className="icon" style={this.styles}>
                    <img src={this.props.logoSrc} className="icon-img" style={this.iconStyles}></img>
                </div>
                <div className="label" style={this.labelStyles}>
                    <div className="label-title">{this.props.title}</div>
                    <div className="label-bar">
                        <div className="bar-content" style={this.barContentStyles}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoundSkillBar;
import React from 'react';
import './round-skill-bar.scss';

export class RoundSkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: props.roundSize + 'em',
            height: props.roundSize + 'em',
            border: '3px solid ' + props.color
        }
        this.iconStyles = {
            width: props.roundSize + 'em',
            height: props.roundSize + 'em'
        }
        this.labelStyles = {
            lineHeight: (props.roundSize - 2.5) + 'em',
            height: props.roundSize + 'em',
            width: props.barWidth + 'vw'
        }
        this.barContentStyles = {
            width: ((props.skillValue / 100) * props.barWidth) + 'vw',
            backgroundColor: props.color
        }
        if (props.iconTop !== undefined && props.iconTop !== null) {
            this.iconStyles['top'] = props.iconTop + 'em';
        }
        if (props.iconHeight !== undefined && props.iconHeight !== null) {
            console.log('have iconHeight');
            this.iconStyles.height = props.iconHeight + 'em';
        }
        if (props.iconWidth !== undefined && props.iconWidth !== null) {
            this.iconStyles.width = props.iconWidth + 'em';
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
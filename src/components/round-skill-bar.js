import React from 'react';
import './round-skill-bar.scss';
import { CSSTransition } from 'react-transition-group';

export class RoundSkillBar extends React.Component {
    constructor(props) {
        console.log('build ' + props.title);
        super(props);
        this.state = {
            styles: {
                width: props.roundSize + 'em',
                height: props.roundSize + 'em',
                border: '3px solid ' + props.color
            },
            iconStyles: {
                width: props.roundSize + 'em',
                height: props.roundSize + 'em'
            },
            labelStyles: {
                lineHeight: (props.roundSize - 2.5) + 'em',
                height: props.roundSize + 'em',
                width: props.barWidth + 'vw'
            },
            per: '0%'
        };
        this.barContentStyles = this.barContentStyles1;
        if (props.iconTop !== undefined && props.iconTop !== null) {
            this.state.iconStyles['top'] = props.iconTop + 'em';
        }
        if (props.iconHeight !== undefined && props.iconHeight !== null) {
            console.log('have iconHeight');
            this.state.iconStyles.height = props.iconHeight + 'em';
        }
        if (props.iconWidth !== undefined && props.iconWidth !== null) {
            this.state.iconStyles.width = props.iconWidth + 'em';
        }
        setTimeout(() => {
            console.log('transition!!!');
            this.setState((state, props) => ({
                per: props.skillValue + '%'
            }))
        }, 500);
    }

    render() {
        return (
            <div className="round-skill">
                <div className="icon" style={this.state.styles}>
                    <img src={this.props.logoSrc} className="icon-img" style={this.state.iconStyles}></img>
                </div>
                <div className="label" style={this.state.labelStyles}>
                    <div className="label-title">{this.props.title}</div>
                    <div className="label-bar">
                        <div className="bar-content" style={{ backgroundColor: this.props.color, width: this.state.per }}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoundSkillBar;
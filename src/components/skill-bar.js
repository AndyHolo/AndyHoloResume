import React from 'react';
import './skill-bar.sass';

export class SkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: ((props.skillValue / 100) * 20) + 'em',
            backgroundColor: props.color
        }
    }

    render() {
        return (
            <div className="skill-bar">
                <div className="label">
                    <img alt="logo" src={this.props.logoSrc} className="label-img"></img>
                </div>
                <div className="bar">
                    <div className="bar-content" style={this.styles}></div>
                </div>
            </div>
        )
    }
}

export default SkillBar;
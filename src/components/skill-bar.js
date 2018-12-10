import React from 'react';
import './skill-bar.sass';

export class SkillBar extends React.Component {
    render() {
        return (
            <div className="skill-bar">
                <label className="label">{this.props.title}</label>
                <div className="bar"></div>
            </div>
        )
    }
}

export default SkillBar;
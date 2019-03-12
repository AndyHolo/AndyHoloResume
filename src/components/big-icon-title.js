import React from 'react';
import './big-icon-title.sass';
import LineBreaker from './line-breaker';

class BigIconTitle extends React.Component {
    render() {
        return (
            <div className="big-icon-title">
                <span className="title-icon">
                    {this.props.children}
                </span>
                <span className="title">
                    <span>{this.props.title}</span>
                </span>
                <LineBreaker length="25%" color='white'></LineBreaker>
            </div>
        )
    }
}

export default BigIconTitle;
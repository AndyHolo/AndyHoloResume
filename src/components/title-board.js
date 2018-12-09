import React from 'react';
import './icon-panel.sass';

class Titleboard extends React.Component {
    render() {
        return (
            <div className="icon-panel">
                <div className="icon">
                    {this.props.children}
                </div>
                <div className="content">
                    <p className="content-text">
                        {this.props.content}
                    </p>
                </div>
            </div>
        )
    }
}

export default Titleboard;
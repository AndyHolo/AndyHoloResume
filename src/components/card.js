import React from 'react';
import './card.scss';
import LineBreaker from './line-breaker';

export class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-img'>
                    <img className='img-content' src={this.props.imgSrc}></img>
                </div>
                <div className='card-content'>
                    <div className='card-title'>{this.props.title}</div>
                    <LineBreaker length='65%' color='black'></LineBreaker>
                </div>
            </div>
        )
    }
}

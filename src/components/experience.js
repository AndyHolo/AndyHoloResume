import React from 'react'
import './experience.scss';
import { Card } from './card';
import work1 from '../assets/shuipingfang.jpg';

export class Experience extends React.Component {
    render() {
        return (
            <div>
                <Card imgSrc={work1} title='南京水平方'></Card>
            </div>
        )
    }
}
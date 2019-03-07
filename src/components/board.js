import React from 'react';
import './board.scss';
import bg1 from '../assets/alex-1395165-unsplash.jpg';
import bg2 from '../assets/oakie-1393809-unsplash.jpg';
import bg3 from '../assets/zdenek-machacek-1396821-unsplash.jpg';
import TitleBoard from './title-board';
import RoundSkillBar from './round-skill-bar';
import { IoMdGlobe } from 'react-icons/io';
import htmlLogo from '../assets/html5.svg';
import cssLogo from '../assets/css.svg';
import javascriptLogo from '../assets/javascript.svg';
import reactLogo from '../logo.svg';
import angularLogo from '../assets/angular.svg';
import javaLogo from '../assets/java.svg';
import {IoMdPulse} from 'react-icons/io';
import springLogo from '../assets/spring.svg'

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrls: [bg1, bg2, bg3],
            index: 0
        };
        this.boardStyle = {
            backgroundImage: 'url(' + this.state.imageUrls[this.state.index] + ')'
        }
    }

    toLeft() {
        console.log('toLeft');
    }

    toRight() {
        console.log('toRight');
        console.log(this.state.index);
        this.setState((state, props) => ({
            index: (state.index + 1) % (state.imageUrls.length)
        }));
        this.boardStyle = {
            backgroundImage: 'url(' + this.state.imageUrls[this.state.index] + ')'
        }
        console.log(this.state.index);
    }

    render() {
        let contentTitle;
        let content;
        switch (this.state.index) {
            case (0): {
                contentTitle = <TitleBoard content="Web development skills"><IoMdGlobe></IoMdGlobe></TitleBoard>;
                content = (<div className="content-body-fa">
                    <div className="content-body">
                        <RoundSkillBar roundSize="8" logoSrc={htmlLogo} title="Html"
                            barWidth="14" skillValue="70" color="rgb(241, 101, 41)"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={cssLogo} title="CSS"
                            barWidth="14" skillValue="60" color="rgb(41, 101, 241)"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={javascriptLogo} title="JavaScript"
                            barWidth="14" skillValue="75" color="rgb(247, 223, 30)"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={reactLogo} title="ReactJS"
                            barWidth="14" skillValue="50" color="#61dafb"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={angularLogo} title="Angular"
                            barWidth="14" skillValue="90" color="rgb(218, 56, 56)"></RoundSkillBar>
                    </div>
                </div>);
                break;
            }
            case (1): {
                contentTitle = <TitleBoard content="Backend development skills"><IoMdPulse></IoMdPulse></TitleBoard>;
                content = (<div className="content-body-fa">
                    <div className="content-body">
                        <RoundSkillBar roundSize="8" logoSrc={javaLogo} title="Java"
                            barWidth="14" skillValue="75" color="rgb(241, 101, 41)"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={springLogo} title="Spring"
                            barWidth="14" skillValue="50" color="rgb(41, 101, 241)"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={javascriptLogo} title="JavaScript"
                            barWidth="14" skillValue="75" color="rgb(247, 223, 30)"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={reactLogo} title="ReactJS"
                            barWidth="14" skillValue="50" color="#61dafb"></RoundSkillBar>
                        <RoundSkillBar roundSize="8" logoSrc={angularLogo} title="Angular"
                            barWidth="14" skillValue="90" color="rgb(218, 56, 56)"></RoundSkillBar>
                    </div>
                </div>);
                break;
            }
        }
        return (
            <div>
                <div className="board" style={this.boardStyle}>
                    <div className="left-arrow" onClick={this.toLeft.bind(this)}></div>
                    <div className="content">
                        {contentTitle}
                        {content}
                    </div>
                    <div className="right-arrow" onClick={this.toRight.bind(this)}></div>
                </div>
            </div>
        )
    }
}
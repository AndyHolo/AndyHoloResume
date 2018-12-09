import React, { Component } from 'react';
import './App.sass';
import Head from './components/head-component';
import headimg from './assets/head.jpeg';
import Cube from './components/cube-component';
import getRandomIntInclusive from './lib'
import BigIconTitle from './components/big-icon-title';
import { Titleboard } from './components/title-board';
import { MdFace } from 'react-icons/md';
import { MdBuild } from 'react-icons/md';
import { MdWeb } from 'react-icons/md';

class App extends Component {
    id = 0;

    constructor(props) {
        super(props);
        this.state = {
            cubes: []
        }
        this.addCubes();
    }

    componentDidMount() {
        this.addTimer = setInterval(() => {
            this.addCubes();
        }, 3000);
        this.deleteTimer = setInterval(() => {
            this.deleteCubes();
        }, 1000);
    }

    addCubes() {
        if (this.state.cubes.length < 3) {
            for (let i = 0; i < getRandomIntInclusive(1, 5); i++) {
                setTimeout(() => {
                    this.setState(function (state, props) {
                        let stateSnap = state.cubes.slice();
                        stateSnap.push({
                            duration: getRandomIntInclusive(5, 25),
                            id: this.id++,
                            beginDate: new Date()
                        });
                        return {
                            cubes: stateSnap
                        }
                    })
                }, getRandomIntInclusive(500, 6000));
            }
        }
    }

    deleteCubes() {
        //this.state.cubes.findIndex
        this.setState(function (state, props) {
            let stateSnap = state.cubes.slice();
            let needSplice = []
            for (let i = 0; i < stateSnap.length; i++) {
                let endDate = stateSnap[i].beginDate.valueOf() + (stateSnap[i].duration * 1000);
                if (new Date() > endDate) {
                    needSplice.push(stateSnap[i].id);
                }
            }
            for (let i = 0; i < needSplice.length; i++) {
                let spliceIndex = stateSnap.findIndex(value => {
                    if (value.id === needSplice[i]) {
                        return true;
                    } else {
                        return false;
                    }
                });
                if (spliceIndex !== -1) {
                    stateSnap.splice(spliceIndex, 1);
                }
            }
            return {
                cubes: stateSnap
            }
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="page">
                <div className="head">
                    <Head imgSrc={headimg} headSize="8em"></Head>
                </div>
                <div className="note">
                    <p>Sun raised from the west</p>
                    <p>and the earth get even darker.</p>
                </div>
                <div className="title">
                    <BigIconTitle title="A brief self introduction">
                        <MdFace className="icon"></MdFace>
                    </BigIconTitle>
                    <p className="introduce-content">I am an energetic developer that always have willing to learn new techniques.
                    I have 3 years experiences in both fontend and backend. I am familiar with Angular,React,PostgreSQL,Spring,Linux
                    and much more...
                    </p>
                </div>
                <div className="title">
                    <BigIconTitle title="Skills">
                        <MdBuild className="icon"></MdBuild>
                    </BigIconTitle>
                    <Titleboard content="Web development skills">
                        <MdWeb></MdWeb>
                    </Titleboard>
                </div>
                {this.state.cubes.map((props) =>
                    <Cube duration={props.duration} key={props.id}></Cube>)}
            </div>
        )
    }
}

export default App;

import React from 'react'
import './background.sass';
import getRandomIntInclusive from '../lib'

class Background extends React.Component {
    constructor(props) {
        super(props);
        let cubes = [];
        for (let i = 0; i < 10; i++) {
            let randomDuration = getRandomIntInclusive(5, 25);
            cubes.push({
                duration: randomDuration,
                id: getRandomIntInclusive(0, 1000),
                beginDate: new Date()
            })
        }
        this.state = {
            cubes: cubes
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 4000);
    }

    tick() {
        //this.state.cubes.splice()
        this.setState(function (state, props) {
            let stateSnap = state.cubes;
            let needSplice = []
            for (let i = 0; i < stateSnap.length; i++) {
                let endDate = stateSnap[i].beginDate.valueOf() + (stateSnap[i].duration * 1000);
                if (new Date() > endDate) {
                    needSplice.push(i);
                }
            }
            for (let i = 0; i < needSplice.length; i++) {
                stateSnap.splice(i, 1);
            }
            /*
            stateSnap.push({
                duration: getRandomIntInclusive(5, 25), id: getRandomIntInclusive(0, 1000),
                beginDate: new Date()
            });
            */
            return {
                cubes: stateSnap
            }
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="background">
                {this.state.cubes.map((props) =>
                    <Cube duration={props.duration} key={props.id}></Cube>)};
            </div>
        )
    }
}

class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: getRandomIntInclusive(1, 15) + 'em' }
        this.cubeStyle = {
            height: this.state.width,
            width: this.state.width,
            animationDuration: props.duration + 's',
            left: Math.random() * 100 + '%'
        }
    }

    render() {
        return (
            <div className="cube" style={this.cubeStyle}></div>
        );
    }
}

export default Background;
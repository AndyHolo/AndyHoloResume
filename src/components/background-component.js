import React from 'react'
import './background.sass';
import getRandomIntInclusive from '../lib'

class Background extends React.Component {
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
        }, 4000);
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
                }, getRandomIntInclusive(0, 4000));
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
            <div className="background">
                {this.state.cubes.map((props) =>
                    <Cube duration={props.duration} key={props.id}></Cube>)}
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
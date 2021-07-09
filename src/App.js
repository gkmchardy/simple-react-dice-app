import React from 'react'
import Die from './Die.js'
import './Style.css'

class Dice extends React.Component {
    constructor() {
        super()
        this.state = {
            die0: 1,
            die1: 6
        }
        this.handleRoll = this.handleRoll.bind(this)
    }

    handleRoll() {
        let d0 = [this.state.die0]
        let d1 = [this.state.die1]
        d0 = Math.ceil(Math.random() * 6)
        d1 = Math.ceil(Math.random() * 6)
        this.setState(prevState => {
            return {
                die0: d0,
                die1: d1
            }
        })
    }

    render() {
        return (
            <div className='DiceGame'>
                <Die pips={this.state.die0} />
                <Die pips={this.state.die1} />
                <div>
                    <button onClick={this.handleRoll} className='DiceButton'>Roll Dice</button>
                </div>
            </div>
        )
    }
}

export default Dice
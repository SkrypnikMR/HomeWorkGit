import React, { Component } from 'react';
import './Timer.scss';
import Input from '../../Input';
import Button from '../../Button';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: `00:00`,
            setBtnDisabled: true,
            controllOperationsBtnsDisabled: true,
            startTime: '',
            empty: '',
            interval: null
        }
    }
    timerCounter = (realTime) => {
        const minutes = Math.floor(realTime / 60);
        let seconds = realTime % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${minutes}:${seconds}`
    }
    handleSetTime = () => this.setState({
        startTime: Number(this.state.startTime),
        controllOperationsBtnsDisabled: false,
        
    })

    handleOnChange = (e) => this.setState({ startTime: e.target.value, setBtnDisabled: false })

    handleOnStart = () => {
        const newInterval = setInterval(() => {
            this.setState({
                startTime: this.state.startTime - 1,
                time: this.timerCounter(this.state.startTime),
                interval: newInterval
            })
        }, 1000)
    }
    handleOnStop = () => {
        clearInterval(this.state.interval)
        this.setState({ inerval: null })
    }
    handleOnReset = () => {
        clearInterval(this.state.interval)
        this.setState({ interval: null, controllOperationsBtnsDisabled: true, setBtnDisabled: true, startTime: '', time: '00:00' })
    }
    render() {
        return (<div className="timer">
            <p className="timer__tablo">{this.state.time}</p>
            <div className="timer__controll-set">
                <Input placeholder='Enter time for Timer' onChangeInput={this.handleOnChange} value={this.state.startTime} />
                <Button onButtonClick={this.handleSetTime} title="Set" disabled={this.state.setBtnDisabled} />
            </div>
            <div className="timer__controll-operations">
                <Button onButtonClick={this.handleOnStop} title="Stop" disabled={this.state.controllOperationsBtnsDisabled} />
                <Button onButtonClick={this.handleOnStart} title="Start" disabled={this.state.controllOperationsBtnsDisabled} />
                <Button onButtonClick={this.handleOnReset} title="Reset" disabled={this.state.controllOperationsBtnsDisabled} />
            </div>
        </div>);
    }
}

export default Timer;
import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './Timer.scss';
import 'react-notifications/lib/notifications.css';
import Input from '../../Input';
import Button from '../../Button';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: `00:00:00`,
            setBtnDisabled: true,
            startBrnDisabled: true,
            stopButtonDisabled: true,
            resetBtnDisabled: true,
            startTime: '',
            interval: null
        }
    }
    timerCounter = (realTime) => {
        let hours = Math.floor((realTime / 60) / 60);
        let minutes = Math.floor(realTime / 60 % 60);
        let seconds = realTime % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;
        return `${hours}:${minutes}:${seconds}`;
    }
    handleSetTime = () => {
        if (!Number(this.state.startTime)) return NotificationManager.error('Expect only numbers in input', 'Input Error!', 5000)
        if (Number(this.state.startTime) > 86400) return NotificationManager.error('Timer only on one day period', 'Input Error!', 5000)
        this.setState({
            realTime: Number(this.state.startTime),
            startTime: '',
            startBrnDisabled: false,
            stopButtonDisabled: false,
            resetBtnDisabled: false,
            time: this.timerCounter(this.state.startTime),
            setBtnDisabled: true
        })
    }


    handleOnChange = (e) => {
        this.setState({startTime: e.target.value, setBtnDisabled: false})
    }

    handleOnStart = () => {
        const newInterval = setInterval(() => {
            if (this.state.realTime === 0) {
                this.handleOnReset();
                return NotificationManager.info('Time is over', 'Info', 5000)
            }
            this.setState({
                realTime: this.state.realTime - 1,
                time: this.timerCounter(this.state.realTime),
                interval: newInterval
            })
        }, 1000)
    }
    handleOnStop = () => {
        clearInterval(this.state.interval)
        this.setState({ interval: null })
    }
    handleOnReset = () => {
        clearInterval(this.state.interval)
        this.setState({
            interval: null,
            setBtnDisabled: true,
            startBrnDisabled: true,
            stopButtonDisabled: true,
            resetBtnDisabled: true,
            setBtnDisabled: true,
            startTime: '',
            realTime: 0,
            time: '00:00:00'
        })
    }
    render() {
        return (<div className="timer">
            <p className="timer__tablo">{this.state.time}</p>
            <div className="timer__controll-set">
                <Input placeholder='Enter time for Timer in sec' onChangeInput={this.handleOnChange} value={this.state.startTime} />
                <Button onButtonClick={this.handleSetTime} title="Set" disabled={this.state.setBtnDisabled} />
            </div>
            <div className="timer__controll-operations">
                <Button onButtonClick={this.handleOnStop} title="Stop" disabled={this.state.stopButtonDisabled} />
                <Button onButtonClick={this.handleOnStart} title="Start" disabled={this.state.startBrnDisabled} />
                <Button onButtonClick={this.handleOnReset} title="Reset" disabled={this.state.resetBtnDisabled} />
            </div>
            <NotificationContainer />
        </div>);
    }
}

export default Timer;
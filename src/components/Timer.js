import React, { Component } from 'react'

export default class Timer extends Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }
        this.playTimer = this.playTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)

    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000)
        this.props.onPlayStopTimer(true)
        this.setState({
            intervalId: intervalId
        })
    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0 ) {
                    this.props.autotone.play();
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(
                            this.state.isSession
                        )
                    } else {
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval()
                    }
                } else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                }
                
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }
    stopTimer() {
        clearInterval(this.state.intervalId)
        this.props.onPlayStopTimer(false)
    }
    resetTimer() {
        this.stopTimer()
        this.props.resetTimer()
        this.props.onPlayStopTimer(false)
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }

    render() {
        return (
            <section className="text-white " >
                
                <section className=" border border-2 rounded" style={{ width: "260px", marginLeft: "38%", padding: "50px" }}>
                    <div className="d-flex justify-content-center">

                        <h2 className={this.state.isSession === true ? "text-white" : "text-danger"}>{this.state.isSession === true ? 'Session' : 'Break'}</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className={this.state.isSession === true ? "text-white" : "text-danger"}>
                            <span>{this.props.timerMinute}</span>
                            <span>:</span>
                            <span>{this.state.timerSecond === 0
                                ? "00"
                                : this.state.timerSecond < 10
                                    ? "0" + this.state.timerSecond
                                    : this.state.timerSecond}</span>
                        </div>
                    </div>
                </section>
                <div className="d-flex justify-content-center m-2">
                    <button
                        className="btn btn-outline-light m-1 btn-sm border border-0"
                        onClick={this.playTimer}
                    >
                        <i className="material-icons" id="car">play_arrow</i>
                    </button>
                    <button
                        className="btn btn-outline-light m-1 btn-sm border border-0"
                        onClick={this.stopTimer}
                    >
                        <i className="material-icons" id="car">pause</i>
                    </button>
                    <button
                        className="btn btn-outline-light m-1 btn-sm border border-0"
                        onClick={this.resetTimer}
                    >
                        <i className="material-icons" id="car">restart_alt</i>
                    </button>
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react'
import { SpaceBreak } from './SpaceBreak';
import Timer from './Timer';
import { TimeSession } from './TimeSession';

export default class Pomodo extends Component {
    constructor(props) {
        super();
        this.state = {
            breakSpace: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false
        }

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this);



    }
    onIncreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakSpace: prevState.breakSpace + 1
            }
        })
    }
    onDecreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakSpace: prevState.breakSpace - 1
            }
        })
    }
    onIncreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.timerMinute + 1
            }
        })
    }
    onDecreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.timerMinute - 1
            }
        })
    }
    onUpdateTimerMinute() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }
    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength
            })
        } else {
            this.setState({
                timerMinute: this.state.breakSpace
            })
        }

    }

    onResetTimer() {
        this.setState({
            timerMinute: this.state.sessionLength
        })
    }

    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay: isPlay
        })
    }

    render() {
        return (
            <main className="container mt-5">
                <audio
                    id="beep"
                    preload="auto"
                    ref={(audio) => {
                        this.audioBeep = audio;
                    }}
                    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                />
                <h1 className="text-center text-white">Reloj Pomodoro</h1>
                <div className="row">
                    <div className="col-md-6">
                        <SpaceBreak
                            isPlay={this.state.isPlay}
                            spaceBreak={this.state.breakSpace}
                            increaseBreak={this.onIncreaseBreakLength}
                            decreaseBreak={this.onDecreaseBreakLength}
                        />
                    </div>
                    <div className="col-md-6">
                        <TimeSession
                            isPlay={this.state.isPlay}
                            sessionLength={this.state.sessionLength}
                            increaseSession={this.onIncreaseSessionLength}
                            decreaseSession={this.onDecreaseSessionLength}
                        />
                    </div>
                </div>
                <Timer
                    timerMinute={this.state.timerMinute}
                    breaktimer={this.state.breakLength}
                    updateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer}
                    onPlayStopTimer={this.onPlayStopTimer}
                    autotone={this.audioBeep}
                />
                
            </main>
        )
    }
}

import React from 'react'

export const TimeSession = (props) => {

    const increaseSession = () => {
        if(props.sessionLength === 60){
            return
        }
        props.increaseSession();
    }

    const decreaseSession = () => {
        if(props.sessionLength === 1){
            return
        }
        props.decreaseSession();
    }


    return (
        <div className="d-flex justify-content-center text-white">
            <section >
                <h1>Sesión de Trabajo</h1>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-outline-light m-2 btn-sm border border-0"
                        onClick={decreaseSession}
                    >
                        <i className="material-icons" id="car">arrow_downward</i>
                    </button>
                    <h3>{props.sessionLength}</h3>
                    <button
                        className="btn btn-outline-light m-2 btn-sm border border-0"
                        onClick={increaseSession}
                    >
                        <i className="material-icons" id="car">arrow_upward</i>
                    </button>
                </div>
            </section>
        </div>
    )
}

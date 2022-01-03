import React from 'react'

export const SpaceBreak = (props) => {

    const drecreaseCounter = () => {
        
        if(props.spaceBreak === 1){
            return;
        }
        props.decreaseBreak();
    }

    const increaseCounter = () => {
        if(props.spaceBreak === 60){
            return;
        }
        props.increaseBreak();
    }

    return (
        <div className="d-flex justify-content-center text-white">
            <section >
                <h1>Descanso</h1>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-outline-light m-2 btn-sm border border-0"
                        onClick={drecreaseCounter}>
                        <i className="material-icons" id="car">arrow_downward</i>
                    </button>
                    <h3>{props.spaceBreak}</h3>
                    <button
                        className="btn btn-outline-light m-2 btn-sm border border-0"
                        onClick={increaseCounter}>
                        <i className="material-icons" id="car">arrow_upward</i>
                    </button>
                </div>
            </section>
        </div>
    )
}

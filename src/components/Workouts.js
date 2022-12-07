import { useState } from "react";
import "../style/componentStyles/workouts.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useRef } from "react";

function Workouts(props) {
    const [checked, setChecked] = useState(props.checked);
    const weightInput = useRef(null);
    function click() {
        if (checked) {
            // If workout checked uncheck
            // TODO: Modal confirm
            setChecked(false)
            props.setChecked(props.index, false)
            props.changeActive(props.index)
        } else if (!checked) {
            if (props.activeIndex === props.index) {
                // If not checked but workout is active set unactive and set checked
                // TODO: Modal input
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='workouts-modalContainer'>
                                <div className='modalContainer-content'>
                                    <h1>What weight did you use?</h1>
                                    <p>If you used multiple weights take the one you were most comfortable with.</p>
                                    <input ref={weightInput} type="number" placeholder={props.weight === null ? props.weight[props.weight.length] : "0"}></input>
                                    <div className='customui-buttons'>
                                        <button onClick={() => {
                                            setChecked(true)
                                            props.setActiveIndex(props.index + 1)
                                            onClose();
                                        }}>Don't Track</button>
                                        <button
                                            onClick={() => {
                                                setChecked(true)
                                                props.setActiveIndex(props.index + 1)
                                                props.setCWeight(props.index, weightInput.current.value)
                                                props.setChecked(props.index, true)
                                                onClose();
                                            }}
                                        >Ok</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                });
            } else {
                // Not checked and not active, set active
                props.changeActive(props.index)
            }
        }

    }
    return (
        <div className={`workout-item${checked ? " checked" : ""}${props.activeIndex === props.index ? " active" : ""}`} onClick={click}>
            <div className={"item-list"}>
                <div className="item-title">{props.title}</div>
                <div className="item-sets">{props.sets}</div>
                <div className="item-reps">{props.reps}</div>
            </div>
            <div className={props.activeIndex === props.index ? "item-stats active" : "item-stats hidden"}>
                <div className="stats-weight">
                    <h6>Prev Weight</h6>
                    <p>{props.weight[props.weight.length - 1] != null ? props.weight[props.weight.length - 1] + "kg" : ""}</p>
                </div>
                <div className="stats-time">
                    <h6>Prev Time</h6>
                    <p>{props.pTime !== "" ? props.pTime + "min" : ""}</p>
                </div>
                <div className="stats-note">
                    <h6>Note</h6>
                    <p>{props.note}</p>
                </div>
            </div>
        </div>
    );
}

export default Workouts;

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
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='confirmModalContainer'>
                            <div className='confirmModalContainer-content'>
                                <h1>Do you want to undo the workout?</h1>
                                <p>This will remove your saved weight and cannot be undone.</p>
                                <div className='confirmModal-buttons'>
                                    <button onClick={() => {
                                        onClose();
                                    }}>No</button>
                                    <button
                                        onClick={() => {
                                            setChecked(false)
                                            props.removeWeight(props.index)
                                            props.setChecked(props.index, false)
                                            props.changeActive(props.index)
                                            onClose();
                                        }}
                                    >Yes</button>
                                </div>
                            </div>
                        </div>
                    );
                }
            });
        } else if (!checked) {
            if (props.activeIndex === props.index) {
                // If not checked but workout is active set unactive and set checked
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='inputModalContainer'>
                                <div className='inputModalContainer-content'>
                                    <h1>What weight did you use?</h1>
                                    <p>If you used multiple weights take the one you were most comfortable with.</p>
                                    <input ref={weightInput} autoFocus type="number" placeholder={props.weight === null ? props.weight[props.weight.length] : "0"}></input>
                                    <div className='inputModal-buttons'>
                                        <button onClick={() => {
                                            setChecked(true)
                                            props.setActiveIndex(props.index + 1)
                                            onClose();
                                        }}>Don't Track</button>
                                        <button
                                            onClick={() => {
                                                setChecked(true)
                                                props.setActiveIndex(props.index + 1)
                                                props.setWeight(props.index, weightInput.current.value)
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

    // TODO: getWeight
    function getWeight() {
        let weight;
        if (props.weight[props.weight.length - 1].weight == null || props.weight[props.weight.length - 1].weight === undefined) {
            weight = 0;
        } else {
            weight = props.weight[props.weight.length - 1].weight
        }
        return weight
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
                    <p>{getWeight() + "kg"}</p>
                </div>
                <div className="stats-time">
                    <h6>Prev Time</h6>
                    <p>{props.time !== "" ? props.time + "min" : ""}</p>
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

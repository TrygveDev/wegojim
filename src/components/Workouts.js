import { useEffect, useState } from "react";
import styles from "../style/componentStyles/workouts.module.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useRef } from "react";

function Workouts(props) {
    const [checked, setChecked] = useState(props.checked);
    const weightInput = useRef(null);
    useEffect(() => {
        setChecked(props.checked)
    }, [props.checked])
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
                                    <input ref={weightInput} autoFocus type="number" placeholder={props.weight} defaultValue={props.weight === "0" ? "" : props.weight}></input>
                                    <div className='inputModal-buttons'>
                                        <button onClick={() => {
                                            onClose();
                                        }}>Back</button>
                                        <button
                                            onClick={() => {
                                                setChecked(true)
                                                props.setActiveIndex(props.index + 1)
                                                props.setWeight(props.index, weightInput.current.value)
                                                props.setChecked(props.index, true)
                                                onClose();
                                            }}
                                        >Track</button>
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
        <div className={`${styles.workoutItem} ${checked ? styles.checked : ""} ${props.activeIndex === props.index ? styles.active : ""}`} onClick={click}>
            <div className={styles.itemList}>
                <div className={styles.itemTitle}>{props.title}</div>
                <div className={styles.itemSets}>{props.sets}</div>
                <div className={styles.itemReps}>{props.reps}</div>
            </div>
            <div className={props.activeIndex === props.index ? `${styles.itemStats} ${styles.active}` : `${styles.itemStats} ${styles.hidden}`}>
                <div className={styles.statsWeight}>
                    <h6>Prev Weight</h6>
                    <p>{props.weight + "kg"}</p>
                </div>
                <div className={styles.statsTime}>
                    <h6>Prev Time</h6>
                    <p>{props.time !== "" ? props.time + "min" : ""}</p>
                </div>
                <div className={styles.statsNote}>
                    <h6>Note</h6>
                    <p>{props.note}</p>
                </div>
            </div>
        </div>
    );
}

export default Workouts;

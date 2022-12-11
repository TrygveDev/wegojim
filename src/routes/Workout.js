import "../style/routeStyles/workout.css";
import "../style/inputModal.css";
import "../style/confirmModal.css";
import Plan from "../components/Plan";
import BackBtn from "../components/BackBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Workout() {
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }
    const [activePlan, setActivePlan] = useState("monday");
    const workoutSelectorEvent = (e) => {
        // TODO: if workout is started prompt that it will be deleted to continue
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='confirmModalContainer'>
                        <div className='confirmModalContainer-content'>
                            <h1>Do you want to switch workout?</h1>
                            <p>Exercises logged will be deleted, this cannot be undone.</p>
                            <div className='confirmModal-buttons'>
                                <button
                                    onClick={() => {
                                        e.target.value = activePlan;
                                        onClose();
                                    }}
                                >No</button>
                                <button
                                    onClick={() => {
                                        Cookies.remove(activePlan + "Temp");
                                        setActivePlan(e.target.value)
                                        onClose();
                                    }}
                                >Yes</button>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }

    function trashClick() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='confirmModalContainer'>
                        <div className='confirmModalContainer-content'>
                            <h1>Do you want to clear your workout?</h1>
                            <p>Everything will be deleted, this cannot be undone.</p>
                            <div className='confirmModal-buttons'>
                                <button
                                    onClick={() => {
                                        onClose();
                                    }}
                                >No</button>
                                <button
                                    onClick={() => {
                                        Cookies.remove(activePlan + "Temp");
                                        refreshPage()
                                        onClose();
                                    }}
                                >Yes</button>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }

    function saveClick() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='confirmModalContainer'>
                        <div className='confirmModalContainer-content'>
                            <h1>Do you want to save and complete your workout?</h1>
                            <p>Everything will be saved and can be viewed in progress.</p>
                            <div className='confirmModal-buttons'>
                                <button
                                    onClick={() => {
                                        onClose();
                                    }}
                                >No</button>
                                <button
                                    onClick={() => {
                                        let toSave = JSON.parse(Cookies.get(activePlan + "Temp"))
                                        const emptyWeight = {
                                            date: Date.now(),
                                            weight: "0"
                                        }
                                        const toSaveObj = toSave.map((item) => {
                                            const newData = {
                                                reps: item.reps,
                                                sets: item.sets,
                                                title: item.title,
                                                weight: item.weight.length === 0 ? item.weight.push(emptyWeight) : item.weight,
                                                time: item.time,
                                                note: item.note,
                                                index: item.index,
                                                checked: false
                                            }
                                            return newData;
                                        })
                                        Cookies.set(activePlan, JSON.stringify(toSaveObj), { expires: 365 })

                                        const toSaveObjProgress = toSave.map((item) => {
                                            const newData = {
                                                title: item.title,
                                                weight: item.weight.length === 0 ? emptyWeight : item.weight[item.weight.length - 1],
                                            }
                                            return newData;
                                        })
                                        const newWorkoutToSave = {
                                            date: Date.now(),
                                            workout: activePlan,
                                            data: {
                                                ...toSaveObjProgress
                                            }
                                        }
                                        if (Cookies.get("previousWorkouts") === undefined) {
                                            Cookies.set("previousWorkouts", JSON.stringify([newWorkoutToSave]), { expires: 365 })
                                        } else {
                                            let previousWorkoutsCopy = JSON.parse(Cookies.get("previousWorkouts"))
                                            previousWorkoutsCopy.push(newWorkoutToSave)
                                            Cookies.set("previousWorkouts", JSON.stringify(previousWorkoutsCopy), { expires: 365 })
                                        }
                                        Cookies.remove(activePlan + "Temp")
                                        refreshPage()
                                        onClose();
                                    }}
                                >Yes</button>
                            </div>
                        </div>
                    </div >
                );
            }
        });
    }

    return (
        <div className="container">
            <BackBtn />
            <div className="timeused">00m:00s</div>
            <div className="content">
                <div className="content-mid">
                    <div className="mid-workoutSelector">
                        <select name="workout" onChange={workoutSelectorEvent}>
                            <option value="monday">Monday Chest & Tricep</option>
                            <option value="tuesday">Tuesday Back & Bicep</option>
                            <option value="thursday">Thursday Legs & Abs</option>
                            <option value="friday">Friday Shoulders</option>
                        </select>
                    </div>

                    <div className="mid-workoutControls">
                        <FontAwesomeIcon icon={faTrash} size="2x" color="gray" onClick={trashClick} />
                        <FontAwesomeIcon icon={faSave} size="2x" color="gray" onClick={saveClick} />
                    </div>

                    <div className="mid-plan">
                        <Plan plan={activePlan} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workout;

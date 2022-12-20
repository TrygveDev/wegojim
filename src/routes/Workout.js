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

function Workout() {
    const [refreshing, setRefreshing] = useState(false);
    const refreshPage = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 100);
    }
    const [activePlan, setActivePlan] = useState("monday");
    const workoutSelectorEvent = (e) => {
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

                                        // Save to previous workouts
                                        let toSave = JSON.parse(Cookies.get(activePlan + "Temp"))
                                        const progressData = toSave.map((item) => {
                                            const newData = {
                                                title: item.title,
                                                weight: item.weight // TODO: If weight is empty, set to last used from progress
                                            }
                                            return newData;
                                        })
                                        const progressObj = {
                                            date: Date.now(),
                                            workout: activePlan,
                                            data: {
                                                ...progressData
                                            }
                                        }

                                        if (Cookies.get("previousWorkouts") === undefined) {
                                            Cookies.set("previousWorkouts", JSON.stringify([progressObj]), { expires: 365 })
                                        } else {
                                            let previousWorkouts = JSON.parse(Cookies.get("previousWorkouts"))
                                            previousWorkouts.push(progressObj)
                                            Cookies.set("previousWorkouts", JSON.stringify(previousWorkouts), { expires: 365 })
                                        }

                                        // Delete temp
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
                        <Plan plan={activePlan} refreshing={refreshing} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workout;

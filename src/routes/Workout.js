import "../style/routeStyles/workout.css";
import Plan from "../components/Plan";
import BackBtn from "../components/BackBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Cookies from "js-cookie";

function Workout() {
    const [activePlan, setActivePlan] = useState("monday");

    const workutSelectorEvent = (e) => {
        // TODO: if workout is started prompt that it will be deleted to continue
        setActivePlan(e.target.value)
    }

    function trashClick() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='workouts-modalContainer'>
                        <div className='modalContainer-content'>
                            <h1>Do you want to clear your workout?</h1>
                            <p>Everything will be deleted, this cannot be undone.</p>
                            <div className='customui-buttons'>
                                <button
                                    onClick={() => {
                                        onClose();
                                    }}
                                >No</button>
                                <button
                                    onClick={() => {
                                        Cookies.remove(activePlan + "Temp");
                                        // Sends into load loop
                                        window.location.reload();
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
                    <div className='workouts-modalContainer'>
                        <div className='modalContainer-content'>
                            <h1>Do you want to save and complete your workout?</h1>
                            <p>Everything will be saved and can be viewed in progress.</p>
                            <div className='customui-buttons'>
                                <button
                                    onClick={() => {
                                        onClose();
                                    }}
                                >No</button>
                                <button
                                    onClick={() => {
                                        let toSave = JSON.parse(Cookies.get(activePlan + "Temp"))
                                        const toSaveObj = toSave.map((item, index) => {
                                            let copyWeightList = JSON.parse(Cookies.get(activePlan))[index].weight
                                            copyWeightList.push({
                                                date: Date.now(),
                                                weight: item.weight.length === 0 ? "0" : item.weight
                                            })
                                            const newData = {
                                                reps: item.reps,
                                                sets: item.sets,
                                                title: item.title,
                                                weight: copyWeightList,
                                                time: item.time,
                                                note: item.note,
                                                index: item.index,
                                                checked: false
                                            }
                                            return newData;
                                        })
                                        Cookies.set(activePlan, JSON.stringify(toSaveObj), { expires: 365 })
                                        Cookies.remove(activePlan + "Temp")
                                        // Sends into load loop
                                        window.location.reload()
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
                        <select name="workout" onChange={workutSelectorEvent}>
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

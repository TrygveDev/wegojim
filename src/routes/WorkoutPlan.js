import "../style/index.css";
import "../style/workoutplan.css"
import Navbar from "../components/Navbar";
import DesktopNotice from "../components/DesktopNotice";
import Workouts from "../components/Workouts";
import { useLocation } from "react-router-dom";
import VerNumb from "../components/VerNumb";
import Modal from "../components/Modal";
import { useState } from "react";
import Cookies from "js-cookie";


function WorkoutPlan() {
    let localData = null;
    const location = useLocation();
    const workoutPlan = location.state.workoutplan;
    console.log(location.state)
    const exercises = workoutPlan.exercises;
    let workoutDataFromState;
    let workoutData;
    if (Cookies.get(workoutPlan.title) != null) {
        localData = JSON.parse(Cookies.get("localWorkoutData"));
        // Create list from local data not location
        workoutData = Object.values(localData).map((exercise, index) => {
            const newData = {
                reps: exercise.props.reps,
                sets: exercise.props.sets,
                title: exercise.props.title,
                pWeight: exercise.props.pWeight,
                cWeight: exercise.props.cWeight,
                checked: exercise.props.checked,
                index: index
            }
            return newData
        })
    } else {
        // create data from location
        workoutDataFromState = {
            datenow: {
                title: workoutPlan.title,
                exercises: exercises
            }
        }
        workoutData = Object.values(workoutDataFromState.datenow.exercises).map((exercise, index) => {
            const newData = {
                reps: exercise.reps,
                sets: exercise.sets,
                title: exercise.title,
                pWeight: "",
                cWeight: "",
                index: index
            }
            return newData
        })
    }


    const [modalProps, setModalProps] = useState(false);


    function setModal(boolean, index) {
        setModalProps([boolean, index]);
    }


    function setCWeight(index, number) {
        console.log(index)
        if (workoutData[index].cWeight === null || workoutData[index].cWeight === "") {
            workoutData[index].cWeight = number
        } else {
            workoutData[index].pWeight = workoutData[index].cWeight
            workoutData[index].cWeight = number
        }
        workoutData[index].checked = true
        console.log(workoutData)
        let exercisesComponentsFromData = Object.values(workoutData).map((workout, index) =>
            <Workouts title={workout.title} cWeight={workout.cWeight} pWeight={workout.pWeight} sets={workout.sets} reps={workout.reps} checked={workout.checked} index={workout.index} key={index} modalProps={modalProps} setModal={setModal} />
        );
        setExercisesComponents(exercisesComponentsFromData)
        Cookies.set(workoutPlan.title, JSON.stringify(exercisesComponentsFromData))
    }


    let exercisesComponentsFromData = Object.values(workoutData).map((workout, index) =>
        <Workouts title={workout.title} cWeight={workout.cWeight} pWeight={workout.cWeight} sets={workout.sets} reps={workout.reps} checked={workout.checked} index={workout.index} key={index} modalProps={modalProps} setModal={setModal} />
    );
    const [exercisesComponents, setExercisesComponents] = useState(exercisesComponentsFromData);

    return (
        <div className="container">
            <VerNumb />
            <Modal modalProps={modalProps} setModal={setModal} setCWeight={setCWeight} />
            <div className="content">
                <div className="content-mid">
                    <h1>{workoutPlan.title}</h1>
                    <div className="mid-subtitle">
                        <div className="subtitles">
                            <div className="subtitle-ex">Exercise</div>
                            <div className="subtitle-set">Sets</div>
                            <div className="subtitle-rep">Reps</div>
                        </div>
                    </div>
                    {/* For Each */}
                    <div className="mid-workouts">
                        <div className="workouts-centered">
                            {exercisesComponents}
                        </div>
                    </div>
                    {/* <p>Progress: 20%</p>
                    <p>Time used: 21m</p>
                    <button>DISCARD WORKOUT</button><button>SAVE WORKOUT</button> */}
                </div>
                <Navbar active="Workout" />
            </div>
            <DesktopNotice />
        </div>
    );
}

export default WorkoutPlan;

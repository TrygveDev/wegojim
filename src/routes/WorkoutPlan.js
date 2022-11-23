import "../style/index.css";
import "../style/workoutplan.css"
import Navbar from "../components/Navbar";
import DesktopNotice from "../components/DesktopNotice";
import Workouts from "../components/Workouts";
import { useLocation } from "react-router-dom";
import VerNumb from "../components/VerNumb";
import Modal from "../components/Modal";
import { useState } from "react";


function WorkoutPlan() {
    const [modalVisible, setModalVisible] = useState(false);
    function setModal(boolean) {
        setModalVisible(boolean);
    }

    const location = useLocation();
    const workoutPlan = location.state.workoutplan;
    const exercises = workoutPlan.exercises;
    const exercisesComponents = Object.values(exercises).map(workout =>
        <Workouts title={workout.title} sets={workout.sets} reps={workout.reps} checked={false} key={Object.values(exercises).indexOf(workout)} modalVisible={modalVisible} setModal={setModal} />
    );

    return (
        <div className="container">
            <VerNumb />
            <Modal modalVisible={modalVisible} setModal={setModal} />
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

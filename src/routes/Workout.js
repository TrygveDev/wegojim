import "../style/index.css";
import "../style/workout.css";
import DesktopNotice from "../components/DesktopNotice";
import Plan from "../components/Plan";
import BackBtn from "../components/BackBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

function Workout() {
    const [activePlan, setActivePlan] = useState("monday");

    const workutSelectorEvent = (e) => {
        // TODO: if workout is started prompt that it will be deleted to continue
        setActivePlan(e.target.value)
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
                        <FontAwesomeIcon icon={faTrash} size="2x" color="gray" />
                        <FontAwesomeIcon icon={faPlay} size="2x" color="gray" />
                        <FontAwesomeIcon icon={faStop} size="2x" color="gray" />
                    </div>

                    <div className="mid-plan">
                        <Plan plan={activePlan} />
                    </div>
                </div>
            </div>
            <DesktopNotice />
        </div>
    );
}

export default Workout;

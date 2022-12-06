import { useState } from "react";
import "../style/workouts.css";

function Workouts(props) {
    const [checked, setChecked] = useState(false);
    const [active, setActive] = useState(false);
    function click() {
        if (checked) {
            setChecked(false)
            setActive(false)
        } else if (!checked) {
            if (active) {
                setChecked(true)
                setActive(false)
            } else {
                setActive(true)

            }
        }

    }
    return (
        <div className={`workout-item${checked ? " checked" : ""}${active ? " active" : ""}`} onClick={click}>
            <div className={"item-list"}>
                <div className="item-title">{props.pWeight} {props.title}</div>
                <div className="item-sets">{props.sets}</div>
                <div className="item-reps">{props.reps}</div>
            </div>
            <div className={active ? "item-stats active" : "item-stats hidden"}>
                <div className={active ? "stats-weight" : "stats-weight hidden"}>
                    <h6>Prev Weight</h6>
                    <p>48kg</p>
                </div>
                <div className={active ? "stats-time" : "stats-time hidden"}>
                    <h6>Prev Time</h6>
                    <p>2.3min</p>
                </div>
                <div className={active ? "stats-note" : "stats-note hidden"}>
                    <h6>Note</h6>
                    <p>3s negatives</p>
                </div>
            </div>
        </div>
    );
}

export default Workouts;

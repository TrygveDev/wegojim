import { useState } from "react";
import "../style/componentStyles/workouts.css";

function Workouts(props) {
    const [checked, setChecked] = useState(false);
    function click() {
        if (checked) {
            // If workout checked uncheck
            // TODO: Modal confirm
            setChecked(false)
            props.changeActive(props.index)
        } else if (!checked) {
            if (props.activeIndex === props.index) {
                // If not checked but workout is active set unactive and set checked
                // TODO: Modal input
                setChecked(true)
                props.setActiveIndex(props.index + 1)
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
                    <p>{props.pWeight}</p>
                </div>
                <div className="stats-time">
                    <h6>Prev Time</h6>
                    <p>{props.pTime}min</p>
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

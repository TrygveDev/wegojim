import "../style/routeStyles/previousworkouts.css";
import BackBtn from "../components/BackBtn";
import Previous from "../components/Previous";
import Cookies from "js-cookie";

function PreviousWorkouts() {
    if (Cookies.get("previousWorkouts") === undefined) {
        return (
            <div className="container">
                <BackBtn />
                <div className="content">
                    <div className="content-mid">
                        <div className="previousWorkoutsNoData">
                            <h1>You have no previous data!</h1>
                            <h2>Go workout!</h2>
                        </div >
                    </div>
                </div>
            </div>
        );
    } else {
        const data = JSON.parse(Cookies.get("previousWorkouts"));
        data.sort((a, b) => { return b.date - a.date })
        return (
            <div className="container">
                <BackBtn />
                <div className="content">
                    <div className="content-mid">
                        <div className="previousWorkoutsList">
                            {data.map((item, index) => {
                                return (<Previous item={item} index={index} key={index} />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviousWorkouts;

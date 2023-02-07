import "../style/routeStyles/progress.css";
import BackBtn from "../components/BackBtn";
// import Cookies from "js-cookie";
// import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// import { useState, useRef } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



// const options = {
//     plugins: {
//         legend: {
//             display: false,
//         },
//         title: {
//             display: false,
//         },
//     },
// };

function Progress() {
    return (
        <div className="container">
            <BackBtn />
            <div className="content">
                <div className="content-mid">
                    <div className="progressSelector">
                        <div className="mid-workoutSelector">
                            <select name="workout">
                                <option value="monday">Monday Chest & Tricep</option>
                                <option value="tuesday">Tuesday Back & Bicep</option>
                                <option value="thursday">Thursday Legs & Abs</option>
                                <option value="friday">Friday Shoulders</option>
                            </select>
                        </div>
                    </div>
                    <h3>This feature is being worked on!</h3>
                </div>
            </div>
        </div>
    );
    // const workoutSelector = useRef(null);
    // const [activeWorkout, setActiveWorkout] = useState("monday");
    // const workoutSelectorEvent = (e) => {
    //     setActiveWorkout(e.target.value)
    // }
    // if (Cookies.get("previousWorkouts") === undefined) {
    //     return (
    //         <div className="container">
    //             <BackBtn />
    //             <div className="content">
    //                 <div className="content-mid">
    //                     <div className="previousWorkoutsNoData">
    //                         <h1>You have no data!</h1>
    //                         <h2>Go workout!</h2>
    //                     </div >
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // } else {
    //     if (Cookies.get("previousWorkouts") !== undefined) {
    //         let cookie = JSON.parse(Cookies.get("previousWorkouts"));
    //         cookie = cookie.filter((item) => item.workout === activeWorkout);
    //         cookie = cookie.sort((a, b) => a.date - b.date);
    //         console.log(cookie)

    //         // get all the weights
    //         const weights = cookie.map((item) => {
    //             return Object.values(item.data).map((item) => item.weight)
    //         })
    //         console.log(weights)

    //         // get all the dates
    //         const dates = cookie.map((item) => {
    //             return item.date
    //         })
    //         console.log(dates)

    //         // get all the exercise names
    //         const exerciseNames = cookie.map((item) => {
    //             return Object.values(item.data).map((item) => item.title)
    //         })
    //         console.log(exerciseNames)

    //         // merge all the data
    //         const dataset = exerciseNames.map((name, index) => {
    //             const newData = {
    //                 "exercise": name,
    //                 "weight": weights[index],
    //                 "date": dates[index]
    //             }
    //             return newData
    //         })
    //         console.log(dataset)
    //         return (
    //             <div className="container">
    //                 <BackBtn />
    //                 <div className="content">
    //                     <div className="content-mid">
    //                         <div className="mid-workoutSelector">
    //                             <div className="progressSelector">
    //                                 <div className="mid-workoutSelector">
    //                                     <select defaultValue={"monday"} ref={workoutSelector} name="workout" onChange={workoutSelectorEvent}>
    //                                         <option value="monday">Monday Chest & Tricep</option>
    //                                         <option value="tuesday">Tuesday Back & Bicep</option>
    //                                         <option value="thursday">Thursday Legs & Abs</option>
    //                                         <option value="friday">Friday Shoulders</option>
    //                                     </select>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="chartList">
    //                             {
    //                                 dataset.map((item, index) => {
    //                                     return (
    //                                         <div key={index} className="chart">
    //                                             <h3>{item.exercise}</h3>
    //                                             <Line options={options} data={{
    //                                                 labels: item.date,
    //                                                 datasets: [
    //                                                     {
    //                                                         label: 'KG',
    //                                                         data: item.weight,
    //                                                         borderColor: '#e2b714',
    //                                                         backgroundColor: '#e2b714',
    //                                                     }
    //                                                 ],
    //                                             }} />
    //                                         </div>
    //                                     )
    //                                 })
    //                             }
    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>
    //         );

    //     } else {
    //         return (
    //             <div className="container">
    //                 <BackBtn />
    //                 <div className="content">
    //                     <div className="content-mid">
    //                         <div className="progressSelector">
    //                             <div className="mid-workoutSelector">
    //                                 <select name="workout" onChange={workoutSelectorEvent}>
    //                                     <option value="monday">Monday Chest & Tricep</option>
    //                                     <option value="tuesday">Tuesday Back & Bicep</option>
    //                                     <option value="thursday">Thursday Legs & Abs</option>
    //                                     <option value="friday">Friday Shoulders</option>
    //                                 </select>
    //                             </div>
    //                         </div>
    //                         <h3>There is no data for this workout!</h3>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     }

    // }


}

export default Progress;

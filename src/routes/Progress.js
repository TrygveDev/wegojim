import "../style/routeStyles/progress.css";
import BackBtn from "../components/BackBtn";
import Cookies from "js-cookie";
import { Line } from 'react-chartjs-2';
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
import { useState, useRef } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const options = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};

function Progress() {
    const workoutSelector = useRef(null);
    const [activeWorkout, setActiveWorkout] = useState();
    console.log(activeWorkout)
    const workoutSelectorEvent = (e) => {
        setActiveWorkout(e.target.value)
    }
    if (Cookies.get("previousWorkouts") === undefined) {
        return (
            <div className="container">
                <BackBtn />
                <div className="content">
                    <div className="content-mid">
                        <div className="previousWorkoutsNoData">
                            <h1>You have no data!</h1>
                            <h2>Go workout!</h2>
                        </div >
                    </div>
                </div>
            </div>
        );
    } else {
        const cookieData = JSON.parse(Cookies.get("previousWorkouts"));
        // Get all weights
        cookieData.filter((item) => item.workout === activeWorkout)
        const weightValues = cookieData.map((item) => {
            return Object.values(item.data).map((dataItem) => {
                return dataItem.weight.weight;
            });
        });
        if (cookieData != null) {
            // Get all exercise names
            const exerciseNames = Object.values(cookieData).map((item) => {
                return Object.values(item.data).map((dataItem) => {
                    return dataItem.title;
                });
            })
            // Get all weights 
            const weightValuesList = weightValues[0].map((weight, index) => {
                return weightValues.reduce((total, val) => {
                    total.push(val[index])
                    return total
                }, []);
            });
            //Get all dates
            const dateValues = cookieData.map((item) => {
                return Object.values(item.data).map((dataItem) => {
                    return new Date(dataItem.weight.date).getDate() + "/" + parseInt(new Date(dataItem.weight.date).getMonth() + 1);
                });
            });
            // Join dates for each exercise
            const dateValuesList = dateValues[0].map((weight, index) => {
                return dateValues.reduce((total, val) => {
                    total.push(val[index])
                    return total
                }, []);
            });
            const dataset = weightValuesList.map((weight, index) => {
                const newData = {
                    "exercise": exerciseNames[0][index],
                    "weight": weight,
                    "date": dateValuesList[index]
                }
                return newData
            })
            return (
                <div className="container">
                    <BackBtn />
                    <div className="content">
                        <div className="content-mid">
                            <div className="mid-workoutSelector">
                                <div className="progressSelector">
                                    <div className="mid-workoutSelector">
                                        <select defaultValue={"monday"} ref={workoutSelector} name="workout" onChange={workoutSelectorEvent}>
                                            <option value="monday">Monday Chest & Tricep</option>
                                            <option value="tuesday">Tuesday Back & Bicep</option>
                                            <option value="thursday">Thursday Legs & Abs</option>
                                            <option value="friday">Friday Shoulders</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="chartList">
                                {
                                    dataset.map((item, index) => {
                                        return (
                                            <div key={index} className="chart">
                                                <h3>{item.exercise}</h3>
                                                <Line options={options} data={{
                                                    labels: item.date,
                                                    datasets: [
                                                        {
                                                            label: 'KG',
                                                            data: item.weight,
                                                            borderColor: '#e2b714',
                                                            backgroundColor: '#e2b714',
                                                        }
                                                    ],
                                                }} />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <BackBtn />
                    <div className="content">
                        <div className="content-mid">
                            <div className="progressSelector">
                                <div className="mid-workoutSelector">
                                    <select name="workout" onChange={workoutSelectorEvent}>
                                        <option value="monday">Monday Chest & Tricep</option>
                                        <option value="tuesday">Tuesday Back & Bicep</option>
                                        <option value="thursday">Thursday Legs & Abs</option>
                                        <option value="friday">Friday Shoulders</option>
                                    </select>
                                </div>
                            </div>
                            <h3>There is no data for this workout!</h3>
                        </div>
                    </div>
                </div>
            );
        }

    }


}

export default Progress;

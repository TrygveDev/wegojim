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
        const data = JSON.parse(Cookies.get("previousWorkouts"));

        // Get all weights from all workoutdata
        const weightValues = data.map((item) => {
            if (item.workout === "monday") {
                return Object.values(item.data).map((dataItem) => {
                    return dataItem.weight.weight;
                });
            } else {
                return null;
            }
        });
        const weightNames = Object.entries(data)[1].map((item) => {
            if (item.workout === "monday") {
                return Object.values(item.data).map((dataItem) => {
                    return dataItem.title;
                });
            } else {
                return null;
            }
        })
        //Get all weights from all weightValues
        const weightValuesList = weightValues[0].map((weight, index) => {
            return weightValues.reduce((total, val) => {
                total.push(val[index])
                return total
            }, []);
        });
        //Get all dates
        const dateValues = data.map((item) => {
            if (item.workout === "monday") {
                return Object.values(item.data).map((dataItem) => {
                    return new Date(dataItem.weight.date).getDate() + "/" + parseInt(new Date(dataItem.weight.date).getMonth() + 1);
                });
            } else {
                return null;
            }
        });
        //Get all weights from all weightValues
        const dateValuesList = dateValues[0].map((weight, index) => {
            return dateValues.reduce((total, val) => {
                total.push(val[index])
                return total
            }, []);
        });
        const datasets = weightNames[1].map((weight, index) => {
            const newData = {
                "exercise": weight,
                "weightList": weightValuesList[index],
                "dateList": dateValuesList[index]
            }
            return newData
        })

        return (
            <div className="container">
                <BackBtn />
                <div className="content">
                    <div className="content-mid">
                        {
                            datasets.map((item, index) => {
                                console.log(item)
                                return (
                                    <div key={index} className="chart">
                                        <h3>{item.exercise}</h3>
                                        <Line options={options} data={{
                                            labels: item.dateList,
                                            datasets: [
                                                {
                                                    label: 'KG',
                                                    data: item.weightList,
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
        );
    }


}

export default Progress;

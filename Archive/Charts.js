import "../style/charts.css"
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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const benchdata = {
    labels,
    datasets: [
        {
            label: '',
            data: [5, 8, 10, 12.5, 12.5, 12, 15],
            borderColor: '#e2b714',
            backgroundColor: '#e2b714',
        }
    ],
};

const curldata = {
    labels,
    datasets: [
        {
            label: '',
            data: [28, 32, 32, 36, 38, 38, 38],
            borderColor: '#e2b714',
            backgroundColor: '#e2b714',
        }
    ],
};

function Charts() {
    return (
        <div className="charts">
            <h3>Bench Press (kg)</h3>
            <Line options={options} data={benchdata} />
            <h3>Bicep Curl (kg)</h3>
            <Line options={options} data={curldata} />
            <h3>Bicep Curl (kg)</h3>
            <Line options={options} data={curldata} />
            <h3>Bicep Curl (kg)</h3>
            <Line options={options} data={curldata} />
        </div>
    );
}

export default Charts;

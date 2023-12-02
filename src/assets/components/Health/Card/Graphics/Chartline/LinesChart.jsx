import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

//Generado por IA, estilo propio
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LinesChart = ({ tittle, barraColor, horizontalArray, verticalArray }) => {

    const data = {
        labels:  horizontalArray, // EJE X
        datasets: [
            {
                data: verticalArray, // EJE Y
                fill: false, // Don't fill area under the line
                borderColor: `${barraColor}`, // Line color
                tension: 0.4, // Smoothening (curved) of data lines
                backgroundColor: 'rgba(28, 29, 30) ', // Line fill color
                pointBackgroundColor: 'rgb(255,255,255)', // Data point fill color
                pointBorderColor: 'rgb(0, 252, 255)', // Border color of data point
                pointRadius: 3, // Radius of data point. Default is 3
                pointHoverBorderColor: 'rgb(75, 192, 192)' // Data point hover border color    
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'white',
                }
            },
            title: {
                display: true,
                //  text: `${tittle}`,  
                color: 'white',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Semana',
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                }
            },
            y: {
                title: {
                    display: true,
                    text: `${tittle}`,
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: 'gray',
                }
            }
        }
    };

    return (
        <div >
            <Line data={data} options={options} />
        </div>
    );
};

export default LinesChart;
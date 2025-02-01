import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureChart = ({ temperatures }) => {
  const data = {
    labels: temperatures.map((_, index) => `Point ${index + 1}`),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default TemperatureChart;

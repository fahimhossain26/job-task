
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from './Dashboard/Sideber';

const Home = () => {
    const data = {
        labels: ['Facebook', 'YouTube', 'Direct Search'],
        datasets: [
          {
            data: [33, 55, 12],
            backgroundColor: ['#4c6ef5', '#fa5252', '#1c7ed6'],
            hoverBackgroundColor: ['#4c6ef5', '#fa5252', '#1c7ed6'],
            borderWidth: 0,
          },
        ],
      };
    
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: '70%',
      };

    return (

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
               
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <Doughnut data={data} options={options} />
        <div className="text-center mt-4">
          <div className="text-xl font-bold text-white">Traffic</div>
          <div className="text-gray-400">
            <span className="block">33% Facebook</span>
            <span className="block">55% YouTube</span>
            <span className="block">12% Direct Search</span>
          </div>
        </div>
      </div>
        </div>

     
    );
};

export default Home;
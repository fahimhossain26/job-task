import { Doughnut } from "react-chartjs-2";
import { BsFillCartPlusFill, BsFillHouseDoorFill } from "react-icons/bs";


import { Line } from 'react-chartjs-2';
import Earning from "../Earning";
import RecentActivity from "../RecentActivity";
import OrderTable from "../OrderTable";


const Overview = () => {
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




  // ------------------------------------------
  const monthlyGraphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Earnings',
        data: [15, 10, 20, 25, 18],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 6,
        tension: 0.3,
      },
      {
        label: 'Store',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 6,
        fill: true,
        tension: 0.3,

      },
    ],
  };





  return (


    <div>
      <div className=' '>
         {/* grid-cols-4 => md:grid-cols-4  */}
        <div className="grid  md:grid-cols-4 grid-rows-auto   p-5  ">  
          {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  "> */}
          {/* Dashboard Overview */}
          <div className="col-span-1 bg-gray-800 p-5 rounded-lg w-68 h-[272px]">
            <h2 className="text-2xl text-white">$6468.96</h2>
            <p className="text-gray-400">Current Month Earnings</p>
            <h2 className="text-2xl text-white mt-5">82</h2>
            <p className="text-gray-400">Current Month Sales</p>
            <button className="mt-5 bg-pink-500 text-white py-2 px-4 rounded-lg">Last Month Summary</button>
          </div>

          {/* Monthly Graph */}
          {/* => overflow-x-auto */}
          <div className=" overflow-x-auto  col-span-2 col-start-2 bg-gray-800 p-5 rounded-lg h-[272px]">
            <Line data={monthlyGraphData} />
          </div>

          {/* Traffic Source */}
          <div className="col-span-1 bg-gray-800 p-5 rounded-lg ml-2">


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

          {/* Summary Cards */}
          <div className="col-span-3  grid grid-cols-4 mt-[-100px]     ">
            <div className="bg-gray-800 p-5  text-center">
              <p className="text-gray-400">Wallet Balance</p>
              <h2 className="text-2xl text-white">$3,567.80</h2>
            </div>
            <div className="bg-gray-800 p-5  text-center">
              <p className="text-gray-400">Referral Earning</p>
              <h2 className="text-2xl text-white">$1,589.53</h2>
            </div>
            <div className="bg-gray-800 p-5  text-center">
              <p className="text-gray-400">Estimated Sales</p>
              <h2 className="text-2xl text-white">$2,651.50</h2>
            </div>
            <div className="bg-gray-800 p-5  text-center">
              <p className="text-gray-400">Earnings</p>
              <h2 className="text-2xl text-white">$53,567.54</h2>
            </div>
          </div>
        </div>







      </div>

      <div>
        <Earning></Earning>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <RecentActivity />
          <OrderTable />
        </div>
      </div>
    </div>

  );
};

export default Overview;
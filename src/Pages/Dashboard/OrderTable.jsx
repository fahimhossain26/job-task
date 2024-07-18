import { FaFileAlt } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { MdDelete } from "react-icons/md";


const orders = [
  { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Process', statusColor: 'bg-pink-500' },
  { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Open', statusColor: 'bg-purple-500' },
  { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'On Hold', statusColor: 'bg-blue-500' },
  { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Process', statusColor: 'bg-green-500' },
  { invoice: '12386', customer: 'Charly dues', from: 'Russia', price: '$2652', status: 'Open', statusColor: 'bg-yellow-500' },
];

const OrderTable = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg">

      <div className="flex gap-3 items-center mb-5  ">
        <div>
        <h2 className="text-xl text-white">Order Status</h2>
        <p className="text-white mb-3">Overview of latest months </p>
        <div className="flex space-x-2">
          <button className="bg-red-500 px-6 rounded-lg text-white">Add</button>
          <button className="bg-gray-500 p-4 rounded-lg text-white "><MdDelete /></button>
          <button className="bg-gray-500 p-4 rounded-lg text-white"> <FaCircleExclamation /></button>
          <button className="bg-gray-500 p-4 rounded-lg text-white"><IoDocument />
          </button>
        </div>
        </div>

        <div className="flex overflow-auto ">
          <input className="p-2 mt-16 w-36 rounded-lg " type="search" placeholder="Search " />
          <button className="btn mt-16 ml-2" > <FaFileAlt className="text-xl" /></button>
        </div>

      </div>


      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">INVOICE</th>
              <th className="p-3">CUSTOMERS</th>
              <th className="p-3">FROM</th>
              <th className="p-3">PRICE</th>
              <th className="p-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="bg-gray-900">
                <td className="p-3">{order.invoice}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.from}</td>
                <td className="p-3">{order.price}</td>
                <td className="p-3  ">
                  <span className={` flex  px-4  py-1 rounded-lg text-white ${order.statusColor}`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p className="text-gray-400">Showing 1 to 20 entries</p>
        <div className="flex space-x-2">
          <button className="bg-gray-500 p-2 rounded-full text-white">1</button>
          <button className=" p-2 rounded-full text-white bg-orange-400">2</button>
          <button className="bg-gray-500 p-2 rounded-full text-white">3</button>
          <button className="bg-gray-500 p-2 rounded-full text-white">4</button>
          <button className="bg-gray-500 p-2 rounded-full text-white">5</button>
          <button className="bg-gray-500 p-2 rounded-full text-white">6</button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;

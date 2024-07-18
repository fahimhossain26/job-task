
// import  TaskIcon  from '../../assets'
import { FaHospital } from 'react-icons/fa6';
// import { ReactComponent as TaskIcon } from '../../assets/github-square.svg'; 
// import { ReactComponent as DealIcon } from './icons/deal.svg';
// import { ReactComponent as ArticleIcon } from './icons/article.svg';
// import { ReactComponent as DockIcon } from './icons/dock.svg';
// import { ReactComponent as CommentIcon } from './icons/comment.svg';

const activities = [
  { time: '40 Mins Ago', title: 'Task Updated', description: 'Nikolai Updated a Task', icon: <FaHospital></FaHospital> , bgColor: 'bg-pink-500' },
  { time: '1 day ago', title: 'Deal Added', description: 'Panshi Updated a Task', icon: <FaHospital></FaHospital> ,  bgColor: 'bg-purple-500' },
  { time: '40 Mins Ago', title: 'Published Article', description: 'Sanshi Updated a Article', icon: <FaHospital></FaHospital> , bgColor: 'bg-blue-500' },
  { time: '1 day ago', title: 'Dock Updated', description: 'Manshi Updated a Dock', icon: <FaHospital></FaHospital> ,  bgColor: 'bg-yellow-500' },
  { time: '1 day ago', title: 'Replied Comment', description: 'Fanshi Added a Comment', icon: <FaHospital></FaHospital> ,  bgColor: 'bg-green-500' },
];

const RecentActivity = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg">
      <h2 className="text-xl text-white mb-5">Recent Activities</h2>
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center mb-4">
          {/* <div className={`p-3 rounded-full ${activity.bgColor} mr-4`}>{activity.icon}</div> */}


          <div className='flex space-x-4'>

          <p className="text-gray-400 my-auto w-20 ">{activity.time}</p>
          <div className={`p-4  rounded-full  ${activity.bgColor} mr-4`}>{activity.icon}</div>
          <div className=''>
          <h3 className="text-white">{activity.title}</h3>
          <p className="text-gray-400">{activity.description}</p>
          </div>

          </div>


          {/* <div>
            <p className="text-gray-400">{activity.time}</p>
            <h3 className="text-white">{activity.title}</h3>
            <p className="text-gray-400">{activity.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;

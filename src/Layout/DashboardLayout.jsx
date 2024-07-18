
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sideber';
import Navber from '../Pages/shared/Navber';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen '>
            {/* siderber  */}

            <Sidebar></Sidebar>
           

            {/* outlet => dynamic content  */}
            <div className='flex-1 md:ml-52'>
                {/* <Navber></Navber> */}
    
                <div className="p-5"><Outlet></Outlet></div>
                
            </div>

        </div>
    );
};

export default DashboardLayout;
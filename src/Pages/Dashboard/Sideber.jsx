import { useState } from 'react'
// import { GrLogout } from 'react-icons/gr'
import { FcGallery, FcSettings, FcTodoList } from 'react-icons/fc'
import { BsFillHouseAddFill } from 'react-icons/bs'
// import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
// import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { MdHomeWork, MdInsertEmoticon, MdWidgets } from 'react-icons/md'
import { FaCcAmazonPay, FaChartLine, FaMap, FaShop, FaSuitcase, FaTable, FaUser, FaWpforms } from 'react-icons/fa6'
import { FaEdit, FaHome, FaVoicemail } from 'react-icons/fa'
import { IoStatsChartSharp } from 'react-icons/io5'
import { GoRepoPush } from 'react-icons/go'
import { IoIosNotifications } from 'react-icons/io'
import { BiCalendarEvent, BiError } from 'react-icons/bi'
import { DiCoffeescript } from 'react-icons/di'

const Sidebar = () => {
  
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-[#1F2937] text-white flex justify-end  '>

        <div>
          <div className='block cursor-pointer p-4 font-bold '>
          
          </div>
        </div>

        <div className='mt-5 w-10 h-5 mb-3 mr-5 '> <img className='mt-[-10px] text-white' src="https://i.postimg.cc/zDtcJWCs/notiiification-removebg-preview.png" alt="" /> </div>
        <div className='mt-5 w-10 h-5 mb-3 mr-5 '> <img className='mt-[-8px] text-white' src="https://i.postimg.cc/0jxF0D0V/new-message-icon.webp" alt="" /> </div>
        <div className='mt-5 w-10 h-5 mb-3 mr-5 '> <img className='mt-[-10px] text-white rounded-full' src="https://i.postimg.cc/GmsK99kt/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vec.avif" alt="" /> </div>
        
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 md:hidden  '
        >
          <AiOutlineBars className='h-5 w-5' />
        </button> 
      </div>



      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-600  w-56 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            {/* <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src='https://i.ibb.co/4ZXzmq5/logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div> */}
             <h2 className=' p-5 px-5 py-3 text-white bg-red-300 mt-[-17px] ml-[-25px] mr-[-20px] text-center text-xl
             bg-gradient-to-r from-pink-500 via-purple-500 to-pink-300
             '> <span className='w-5 h-5 bg-red-500 px-2 py-1 mr-2 rounded-full'> D</span>DashBoard</h2>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink to='/'
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaHome className='w-5 h-5' />
                <span className='mx-4 font-medium'>Overview</span>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <MdWidgets className='w-5 h-5' />
                <span className='mx-4 font-medium'>Widgets</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaSuitcase  className='w-5 h-5' />
                <span className='mx-4 font-medium'>UiElement</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <IoStatsChartSharp className='w-5 h-5' />
                <span className='mx-4 font-medium'>Advance Ui</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaWpforms className='w-5 h-5' />
                <span className='mx-4 font-medium'>From Element</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaEdit className='w-5 h-5' />
                <span className='mx-4 font-medium'>Editor </span>
              </NavLink> <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaChartLine className='w-5 h-5' />
                <span className='mx-4 font-medium'>Chart</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaTable className='w-5 h-5' />
                <span className='mx-4 font-medium'>Table</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <GoRepoPush className='w-5 h-5' />
                <span className='mx-4 font-medium'>PopUp</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <IoIosNotifications className='w-5 h-5' />
                <span className='mx-4 font-medium'>Notifications</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <MdInsertEmoticon className='w-5 h-5' />
                <span className='mx-4 font-medium'>Icon</span>
              </NavLink>
               <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaMap className='w-5 h-5' />
                <span className='mx-4 font-medium'>Map</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaUser className='w-5 h-5' />
                <span className='mx-4 font-medium'>UserPage</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <BiError className='w-5 h-5' />
                <span className='mx-4 font-medium'>Error Page</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaShop className='w-5 h-5' />
                <span className='mx-4 font-medium'>Ecommarce </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FaVoicemail className='w-5 h-5' />
                <span className='mx-4 font-medium'>Email</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <BiCalendarEvent className='w-5 h-5' />
                <span className='mx-4 font-medium'>Calender </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FcTodoList className='w-5 h-5' />
                <span className='mx-4 font-medium'>Todo list </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <FcGallery className='w-5 h-5' />
                <span className='mx-4 font-medium'>Gallery</span>
              </NavLink> <NavLink
                className={({ isActive }) =>
                  `flex items-center px-4  my-3  transition-colors duration-300 transform     hover:text-green-700 ${
                    isActive ? 'text-white' : 'text-white'
                  }`
                }
              >
                <DiCoffeescript className='w-5 h-5' />
                <span className='mx-4 font-medium'>Documentaton</span>
              </NavLink>
              





              

              
              
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
        
        </div>
      </div>
    </>
  )
}

export default Sidebar
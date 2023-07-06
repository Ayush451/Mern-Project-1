import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';

const Sidebar = () => {
const {userInfo} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall]=useLogoutMutation();
  
  const logoutHandler = async ()=>{
    try {
      await logoutApiCall().unwrap(); //this api will make the request and destory the cookie
      dispatch(logout()) //destory the local storage
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">TradeFair</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <Person2Icon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <ReceiptIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <StackedBarChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MedicalInformationIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <HistoryIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <ReceiptIcon className="icon"/>
                    <span>Profile</span>
                </li>
                    <li onClick={logoutHandler}>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
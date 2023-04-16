import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const navigateDashboard = async () => {
        await navigate('/dashboard');
    };
    
    const navigateServer = async () => {
        await navigate('/server');
    };

    return (
        <div>
            <div className="navbar">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost normal-case text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-2xl md:text-3xl">Sorteus</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className='flex space-x-2'> 
                            <li><button onClick = {navigateDashboard} className='border text-blue-200 border-blue hover:bg-blue-300 hover:border-black hover:text-black font-bold transition focus:ring focus:ring-blue-500 focus:ring-opacity-80'>Dashboard</button></li>
                            <li><button onClick = {navigateServer} className='font-bold border border-black bg-blue-300 text-black hover:bg-black hover:border-blue-300 hover:text-blue-200 transition focus:ring focus:ring-blue-500 focus:ring-opacity-80'>Server</button></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header

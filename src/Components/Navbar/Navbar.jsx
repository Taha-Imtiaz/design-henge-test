import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/logo.jpg';
import menu from '../../assets/menu-btn.png';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
  return (
    <>
        <nav className="px-16 py-6">
            <div className="flex w-full justify-between items-center">
            <div className="cursor-pointer">
                <img src={logo} className='h-12 w-12' alt="logo" />
            </div>
            <div className="roboto_font w-[550px] justify-between cursor-pointer  hidden lg:flex">
                <p className='nav_item'>HOME</p>
                <p className='nav_item'>ABOUT US</p>
                <p className='nav_item'>SERVICES</p>
                <p className='nav_item'>CONTACT US</p>
                <p className='nav_item'>CASE STUDY</p>
            </div>
            <div className="cursor-pointer" onClick={()=>setSidebar(true)}>
                <img className='lg:hidden' src={menu} alt="menu" />
            </div>
            </div>
        </nav>
        <nav className="px-32 py-6 lg:hidden">
            {sidebar && <Sidebar cancelSidebar={() => setSidebar(false)} />}
        </nav>
    </>
  )
}

export default Navbar
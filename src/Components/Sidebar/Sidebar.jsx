
const Sidebar = ({ cancelSidebar }) => {
    const closeSidebar = (event) => {
        if(event.target === event.currentTarget){
            cancelSidebar();
        }
    }
  return (
    <div onClick={closeSidebar} className="fixed top-0 z-30 left-0 w-full h-screen bg-black/30">
        <div className='absolute z-50 top-0 right-0 w-[300px] h-screen bg-white px-6 py-8'>
            <div className="flex flex-row-reverse right-1" onClick={cancelSidebar}>{crossIcon}</div>
            <div className="roboto_font flex flex-col w-[550px] justify-between cursor-pointer mt-5 gap-y-2">
              <p className='sidebar_item'>HOME</p>
              <p className='sidebar_item'>ABOUT US</p>
              <p className='sidebar_item'>SERVICES</p>
              <p className='sidebar_item'>CONTACT US</p>
              <p className='sidebar_item'>CASE STUDY</p>
            </div>
        </div>
    </div>
  )
}

const crossIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

);

export default Sidebar;
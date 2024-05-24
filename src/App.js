import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { BsSearch,  BsChevronDown,BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson  } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

export default function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const menu = [
    { title : "Dashboard"},
    {title : "Pages", icon : <AiOutlineFileText /> },
    {title : "Media", icon : <BsFillImageFill />, spacing : true},
    {
      title : "Projects",
      submenu : true,
      icon : <BsReverseLayoutTextSidebarReverse />,
      submenuItems : [
        { title : "Project 1"},
        { title : "Project 2"},
        { title : "Project 3"},
      ],
    },
    {title : "Charts"},
    {title : "Analytics", icon : <AiOutlineBarChart />},
    {title : "Widgets"},
    {title : "Inbox", icon : <AiOutlineMail />},
    {title : "Profile", spacing : true, icon : <BsPerson />},
    {title : "Settings", icon : <AiOutlineSetting />},
    {title : "Sign Out", icon : <AiOutlineLogout />},
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-puple h-screen p-5 pt-8  ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <FaArrowLeftLong
          className={`bg-white text-dark-puple text-3xl p-1 rounded-full absolute  -right-3 top-9 border border-dark-puple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-700 ${!open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Tailwind</h1>
        </div>


        <div className={`flex items-center bg-light-whit rounded-md mt-6 ${!open ? "pl-1" : "px-4" } py-2`} >
        <BsSearch className={`text-white mr-2 ${!open ? "text-3xl" : "text-xl"}` } />
        <input 
        type="text" 
        placeholder="Search"
        className={`bg-transparent text-base w-full text-white focus:outline-none ${!open && "hidden"}`}
        />

        </div>

        <ul className="pt-2">
          {
            menu.map((menuItem, index) => (
              <>
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-whit rounded-md ${menuItem.spacing ? "mt-9" : "mt-2"}`}>
                  <span className="text-2xl block float-left">
                    {menuItem.icon ? menuItem.icon : <RiDashboardFill/>}</span>
                  <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menuItem.title}</span>

                  {menuItem.submenu && open && <BsChevronDown className={`duration-200 ${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>}
                </li>

                {menuItem.submenu && open && submenuOpen && (
                  <ul>
                    {menuItem.submenuItems.map((submenuItem, index)=>(
                      <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-whit rounded-md`}>
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))
          }
          
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

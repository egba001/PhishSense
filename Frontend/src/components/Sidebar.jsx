import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { BiSolidDashboard } from 'react-icons/bi';
import { FiLink2 } from 'react-icons/fi';
import { BsSafe2Fill } from 'react-icons/bs';
import { useState } from "react";

const Sidebar = () => {

    const [ expanded, setExpanded ] = useState(false);

    const { pathname } = useLocation();

    return(
        <aside className="fixed left-0 h-full pt-10 w-[3rem] lg:w-[15rem] bg-white shadow-xl">
            <nav>
                <ul className="flex flex-col">
                    <li>
                        <NavLink to="/dashboard"
                            className={pathname === "/dashboard" ? "bg-blue py-2 pl-2 transition-all duration-200 text-white font-bold text-xl w-full block" : "bg-white block py-2 pl-2 w-full"
                        }>
                            <BiSolidDashboard className="mx-auto lg:hidden" />
                            <span className="hidden lg:block">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="verify-link"
                            className={({ isActive }) =>
                                isActive ? "bg-blue py-2 text-white font-bold transition-all duration-200 text-xl pl-2 block w-full" : "bg-white block py-2 pl-2 w-full"
                        }>
                            <FiLink2 className="mx-auto lg:hidden" />
                            <span className="hidden lg:block">Link Verification</span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink to="safety-tips"
                            className={({ isActive }) =>
                            isActive ? "bg-blue py-2 pl-2 w-full block transition-all duration-200 text-white font-bold text-xl" : "bg-white py-2 block pl-2 w-full"
                        }>
                            <BsSafe2Fill className="mx-auto lg:hidden" />
                            <span className="hidden lg:block">Safety tips</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
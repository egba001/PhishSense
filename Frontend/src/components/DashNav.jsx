import { Link } from "react-router-dom"
import logo from '/logo.svg';

const DashNav = () => {
    return (
        <div className="z-10 bg-blue py-10 sticky w-full top-0 left-0 right-0">
            <div className="flex items-center justify-between w-[90%] mx-auto">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-32 lg:w-fit" />
                </Link>
                <div className="flex items-center text-white">
                    <p>Welcome, Dupe Musa</p>
                </div>
            </div>
        </div>
    )
}

export default DashNav;
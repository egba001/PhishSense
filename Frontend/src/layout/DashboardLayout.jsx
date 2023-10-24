import PropTypes from "prop-types"
import DashNav from "../components/DashNav";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen w-full">
            <DashNav />
            <Sidebar />
            <div className="lg:pl-[18rem] pl-[4rem] pr-[1rem] lg:pr-[3rem] pt-[2rem] bg-[#F4F4F4] h-screen">
                {children}
            </div>
        </div>
    )
}

DashboardLayout.propTypes = {
  children: PropTypes.any
}

export default DashboardLayout;
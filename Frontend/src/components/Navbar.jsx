import { useState } from 'react';
import logo from '/logo.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const openNavMenu = () => {
        setIsOpen(true);
    }

    const closeNavMenu = () => {
        setIsOpen(false);
    }

    return (
        <div className={`bg-blue w-full flex justify-between items-center py-6 px-6 lg:px-12`}>
            <Link to="/">
                <img
                    src={logo}
                    alt="Phishsense"
                />
            </Link>
            <div className='cursor-pointer lg:hidden rounded-full text-white'>
                <BiMenu size={25} onClick={openNavMenu} />
            </div>
            <div
                className={`h-screen fixed pt-7 w-full z-40 ease-in-out duration-300 bg-white top-0 right-0 ${isOpen ? "translate-x-0 " : "translate-x-full "}`}>
                <AiOutlineClose size={25} className='mr-4 right-2 absolute cursor-pointer text-blue' onClick={closeNavMenu} />
                <img
                    src={logo}
                    alt="Phishsense"
                    className='cursor-pointer ml-2'
                />
                <nav className='mt-28 mx-auto w-fit mb-10 text-blue'>
                    <ul className='flex flex-col items-center space-y-4 font-bold text-2xl'>
                        <li className='active:text-green'>About</li>
                        <li className='active:text-green'>Features</li>
                        <li className='active:text-green'>Resources</li>
                        <li className='active:text-green'>Demo</li>
                    </ul>
                </nav>
                <Link to='/signup' className='px-6 block text-white bg-blue w-[15rem] bg-green mx-auto text-center mb-4 py-2 rounded-lg'>
                    Sign up
                </Link>
                <Link to='/login' className='outline-none text-blue block mx-auto text-green w-[15rem] rounded-xl active:bg-green active:text-white active:border-0 py-2 cursor-pointer border text-center border-blue'>Login</Link>
            </div>
            <nav className='hidden lg:block'>
                <ul className='flex items-center space-x-6'>
                    <li className="relative group cursor-pointer">
                        <Link to="/">
                            <span className='font-medium text-[20px] text-[#F4F4F4]'>Home</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full group-hover:transition-all"></span>
                        </Link>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/">
                            <span className='font-medium text-[20px] text-[#F4F4F4]'>Services</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full group-hover:transition-all"></span>
                        </Link>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/">
                            <span className='font-medium text-[20px] text-[#F4F4F4]'>FAQs</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full group-hover:transition-all"></span>
                        </Link>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link to="/">
                            <span className='font-medium text-[20px] text-[#F4F4F4]'>Privacy</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full group-hover:transition-all"></span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='hidden lg:flex items-center space-x-8'>
                <Link to="/login">
                    <p className='py-2 border-2 hover:bg-white hover:text-blue transition-colors duration-200 border-[#F2F2F2] rounded-lg text-[#F2F2F2] w-[6rem] text-center'>Log In</p>
                </Link>
                <Link to="/signup">
                    <p className='py-2 hover:border-2 bg-white hover:bg-blue text-blue transition-colors duration-200 rounded-lg hover:text-[#F2F2F2] w-[6rem] text-center'>Sign Up</p>
                </Link>
            </div>
        </div>
    )
}
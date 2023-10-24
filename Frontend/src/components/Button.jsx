import { Link } from "react-router-dom";

const Button = ({ text }) => {
    return (
        <Link to='/signup' className='w-[12rem] text-white bg-blue mx-auto rounded-xl py-2 lg:py-4 px-4 lg:px-6 font-bold text-xl block text-center'>
            {text}
        </Link>
    )
}

export default Button;
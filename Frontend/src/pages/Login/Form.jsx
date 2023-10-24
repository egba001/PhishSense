import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Form  = () => {
    return (
        <div className="bg-white h-full py-10 w-full flex justify-center rounded-xl">
            <div className="w-full px-8">
                <h3 className="text-center text-dark text-2xl font-bold mb-10">Sign In</h3>
                <form className="w-full flex flex-col space-y-8">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <input type="password" name="password" id="password" placeholder="Password" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <div className="flex justify-between items-center">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox"/>
                            <span>Remember me</span>
                        </label>
                        <p className="text-dark">Forgot Password</p>
                    </div>
                    <Button text="Sign In"/>
                    <p className="text-center">Don&#39;t have an Account? <Link className="text-blue font-bold" to="/signup">Sign up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Form;
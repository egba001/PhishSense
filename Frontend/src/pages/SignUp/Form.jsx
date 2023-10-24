import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Form  = () => {
    return (
        <div className="bg-white h-full py-10 w-full flex justify-center rounded-xl">
            <div className="w-full px-8">
                <h3 className="text-center text-dark text-2xl font-bold mb-10">Create Account</h3>
                <form className="w-full flex flex-col space-y-8">
                    <input type="text" name="name" id="name" placeholder="Name" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <input type="email" name="email" id="email" placeholder="Email Address" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <input type="password" name="password" id="password" placeholder="Password" className="py-3 placeholder:text-gray-600 pl-5 w-full focus:outline-blue bg-[#CBECF0]/[.4] border-gray-200 border rounded-md" />
                    <p className="text-center text-dark/[.7] mb-6">By clicking on “Create Account”, I agree to Weblify’s terms & condition and Privacy policy</p>
                    <Button text="Create Account"/>
                    <p className="text-center">Already have an Account? <Link className="text-blue font-bold" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Form;
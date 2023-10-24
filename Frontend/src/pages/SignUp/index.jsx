import Form from "./Form";
import logo from '/logo.svg'

const Signup = () => {
    return (
        <div
        className="flex items-center"
        style={{
            // use the src property of the image object
            backgroundImage: "url('/background.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            position: 'relative'
          }}
        >
            <div className="h-[90%] w-full lg:w-1/2 px-6 lg:px-16">
                <Form />
            </div>
            <div className="mx-auto hidden lg:block w-fit">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Signup
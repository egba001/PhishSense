const Header = () => {
    return (
        <header
        style={{
            // use the src property of the image object
            backgroundImage: "url('/background.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "80vh",
            position: 'relative'
          }}
        >
            <div style={{
                // use the src property of the image object
                backgroundImage: "linear-gradient(356deg, #003559 20.94%, rgba(0, 53, 89, 0.00) 97.12%)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                bottom: "0",
                padding: "10px 10px",
                left: "0",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "50%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="absolute m-auto left-0 right-0 -top-52 lg:-top-1/2 bottom-0 text-white">
                    <div>
                        <h1 className="text-[40px] font-bold text-center mb-4">Guarding Your Digital World, One Link at a Time</h1>
                        <p className="text-center text-[18px] lg:text-[25px]">Verified Links for a Safer Social Media Experience</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <form className="flex items-center space-x-3 mt-24 lg:mt-40">
                            <input type="url" placeholder="Place link here" className="bg-white focus:outline-blue text-[#0f0f0f] block rounded-xl py-4 px-2 w-[60%] lg:w-[25rem]" />
                            <button className="bg-blue py-4 px-4 rounded-xl">
                                <span>Verify Link</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
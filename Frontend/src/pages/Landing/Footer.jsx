const Footer = () => {
    return (
        <footer className="w-full bg-[#003559] text-white pb-16">
            <div className="container mx-auto px-5 lg:px-20 pt-14">
                <h2 className="text-2xl lg:text-center font-bold text-white mb-12">Phishsense</h2>
                <nav className="mb-12">
                    <ul className="text-white flex lg:flex-row flex-col items-start lg:items-center justify-center lg:space-x-12">
                        <li className="cursor-pointer hover:text-blue text-xl">Home</li>
                        <li className="cursor-pointer hover:text-blue text-xl">Services</li>
                        <li className="cursor-pointer hover:text-blue text-xl">Faq</li>
                        <li className="cursor-pointer hover:text-blue text-xl">Privacy</li>
                    </ul>
                </nav>
                <p className="text-center">© Copyright 2023 - Phishsense</p>
            </div>
        </footer>
    )
}
export default Footer;
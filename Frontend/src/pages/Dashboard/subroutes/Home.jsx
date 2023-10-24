
const links = [
    {
        link: "https://google.com",
        date: "2nd October 2023",
        status: "insecure"
    },
    {
        link: "https://google.com",
        date: "2nd October 2023",
        status: "secure"
    },
    {
        link: "https://google.com",
        date: "2nd October 2023",
        status: "insecure"
    },
    {
        link: "https://google.com",
        date: "2nd October 2023",
        status: "secure"
    },
    {
        link: "https://google.com",
        date: "2nd October 2023",
        status: "insecure"
    },
    {
        link: "https://google.com",
        date: "2nd October 2023",
        status: "secure"
    },
]

const Home = () => {
    return (
        <div className="pb-8 max-w-full">
            <h3 className="font-bold text-dark text-2xl">Hello Dupe!</h3>
            <p className="mt-3 text-dark mb-4">Welcome back</p>
            <h4 className="font-medium mb-5 text-xl">List of scanned links</h4>
            <div className="w-full overflow-scroll">
            <table className="w-full p-5 bg-blue/[.1] rounded-xl ">
                <thead>
                    <tr className="text-left border-b border-b-gray-500">
                        <th className="p-6">Links</th>
                        <th>Date</th>
                        <th className="p-6">Status</th>
                    </tr>
                </thead>
                <tbody className="odd:bg-blue">
                    {
                        links.map((link, id) => {
                            return (
                                <tr key={id} className="even:bg-blue/[.16] rounded-md">
                                    <td className="p-6">{link.link}</td>
                                    <td>{link.date}</td>
                                    <td className={link.status === "secure" ? "bg-green-200/[.9] p-6" : "bg-red-200/[.9] p-6"}>{link.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Home;
import VerificationReport from "../../../components/VerificationReport";

const Verify = () => {
    return (
        <div className="pb-12">
            <h3 className="font-bold text-dark text-2xl">Link Verification</h3>
            <div className="w-full lg:w-[40%] mb-6">
                <form className="mt-12">
                    <input type="url" placeholder="Place link here" className="bg-white focus:outline-blue text-[#0f0f0f] block rounded-xl py-4 mb-6 px-2 w-full border border-gray-200 lg:w-[25rem]" />
                    <button className="bg-blue py-4 text-white px-4 rounded-xl w-full">
                        <span>Verify Link</span>
                    </button>
                </form>
            </div>
            <VerificationReport />
        </div>
    )
}

export default Verify;
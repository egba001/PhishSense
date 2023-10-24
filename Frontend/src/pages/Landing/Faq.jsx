import FaqComponent from "../../components/FaqComponent";

const Faq = () => {
    return (
        <section className="pt-16 pb-28 px-5 lg:px-32 w-full">
            <div className="container mx-auto px-2 lg:p-20 rounded-3xl pt-8 bg-[#04C5DF]/[.17]">
                <h2 className="text-center text-xl lg:text-3xl font-medium mb-3">Frequently Asked Questions</h2>
                <FaqComponent />
            </div>
        </section>
    )
}

export default Faq;
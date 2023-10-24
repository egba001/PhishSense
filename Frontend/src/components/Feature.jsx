const Feature = ({ icon, title, body }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 lg:w-[18rem]">
            <img src={icon} alt={title} />
            <h3 className="text-dark font-bold text-md lg:text-xl">{title}</h3>
            <p className="text-center text-[14px] lg:text-[17px]">{body}</p>
        </div>
    )
}

export default Feature;
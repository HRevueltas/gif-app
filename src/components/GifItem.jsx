

export const GifItem = ({ id, title, url }) => {


    return (
        <div className="card"  >
            <img src={url} alt={title} />
            <p className=" mt-2 bg-white rounded-sm p-2 text-black xl:text-base sm:mt-2 text-xs ">{title}</p>
        </div>
    )
}

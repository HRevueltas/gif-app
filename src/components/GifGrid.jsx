import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { LoadingMessage } from "./LoadingMessage"


// style classes 
const styleClasses = {
  title: "text-center ext-2xl font-bold my-2",
  gifContainer: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ",
  delete: ' ml-2 bg-red-500/80 hover:bg-red-600/80 text-white px-4 py-2 rounded-xl transition duration-200 m-6'

}

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3 className={styleClasses.title}>{category}</h3>

      <LoadingMessage isLoading={isLoading} />


      {/* <button className={styleClasses.delete}>Eliminar</button> */}


      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 card-grid '>
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>

    </>


  )
}

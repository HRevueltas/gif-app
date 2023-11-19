import { useState } from 'react'




// Clases de estilo con Tailwind CSS
const styleClasses = {
    form: "flex justify-center my-4 backdrop-blur-md bg-white/30 border border-gray-200 rounded-xl p-4 shadow-lg",
    input: "flex-1 outline-none border-0 bg-transparent placeholder-gray-500",
    button: "ml-2 bg-blue-500/80 hover:bg-blue-600/80 text-white px-4 py-2 rounded-xl transition duration-200",
  };



export const AddCategory = ({ onNewCategory}) => {




 
    const [inputValue, setInputValue] = useState('');


    const onInputChange = ({ target }) => {

        setInputValue(target.value)
    } 

    const onSubmit = (event) => {
        event.preventDefault()

        if (inputValue.trim().length <= 1) return


        // setCategories(categories => ([inputValue, ...categories]))
        
        onNewCategory(inputValue.trim())
        setInputValue('')
        

    }

    // RENDER JSX
    return (
      <form onSubmit={onSubmit} className={styleClasses.form}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar GIFs"
        className={styleClasses.input}
      />
      <button
        type="submit"
        className={styleClasses.button}
      >
        Buscar
      </button>
    </form>
      
    )
}



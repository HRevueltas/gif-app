import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



const styleClasses ={
    title: 'text-4xl font-bold text-center my-6 gradient-animated'
}


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1 className={styleClasses.title}>Gif Expert App</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
          
                />
            )
            )}

        
        </>
    )
}

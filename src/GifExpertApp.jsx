import { useState } from "react";
import { AddCategory,  GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch Man']);

    const onAddCategory = (newCategory) => {

        if (categories.includes( newCategory )) return;


        // console.log(newCategory); //".push no cambia el estado, por ende no funciona"
        setCategories([newCategory,...categories]);
        // setCategories(cat => [...cat, 'BorutoNextGeneration']);
    };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={ (value) => onAddCategory (value)}
        />

        
        {
            categories.map(( category ) => (
                <GifGrid key = {category}
                        category={category}
                />         
            ))
        }

    </>
  )
}

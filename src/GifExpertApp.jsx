import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Solo Leveling"]);

    const onAddCategory = (NewCategory) => {
        // Validar si la categoria ya existe
        if (categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...categories]);
    };

    return (
        <>
            <h1>Buscador de Gifs</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

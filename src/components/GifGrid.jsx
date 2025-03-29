import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category); // Custom hook to fetch gifs

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando</h2> // Show loading message while fetching gifs
            }
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image} // Spread operator to pass all properties of the image object as props
                    />
                ))}
            </div>
        </>
    );
};

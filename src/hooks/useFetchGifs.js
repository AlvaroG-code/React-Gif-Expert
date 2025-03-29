import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // ✅ Ahora sí está definido

    const getImages = async () => {
        setIsLoading(true); // Antes de cargar, indicamos que está en proceso
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); // Cuando termina, cambiamos isLoading a false
    };

    useEffect(() => {
        getImages();
    }, [category]); // Se ejecuta cada vez que cambia la categoría

    return {
        images, // ✅ Ahora devolvemos el estado real de las imágenes
        isLoading, // ✅ También devolvemos el estado real de la carga
    };
};

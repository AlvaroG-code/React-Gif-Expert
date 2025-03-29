export const getGifs = async (category) => {
    // Aquí iría la lógica para obtener los gifs de la API
    const url = `https://api.giphy.com/v1/gifs/search?api_key=g32F81nGS3S4I69dGWVZltldUgJANcrT&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};

export const GetGifs = async(categoria) => {
    let response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=zWXbf2E2jv3fYQKJU22YnT9XCRtI2cBL&q=${encodeURI(categoria)}&limit=10`);
    const { data } = await response.json();

    const gift = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url,
        };
    });
    return gift;
};


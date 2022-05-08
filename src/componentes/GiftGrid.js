import GiftItem from "./GiftItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GiftGrid = ({ categoria }) => {
    const {data:images, loading} = useFetchGifs(categoria);

    return ( 
        <>
        <h3 className="card animate__animated animate__bounce"> { categoria } </h3>
        {loading && <h1 className="card animate__animated animate__flash">Loading...</h1> }
        <div className = "card-grid" > {
            images.map(img => ( 
                <GiftItem key = { img.id } {...img }/>
            ))
        } 
        </div> 
        </>
    );
};

export default GiftGrid;
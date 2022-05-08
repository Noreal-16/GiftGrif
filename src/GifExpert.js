import React, { useState } from 'react';

import GifGrifAdd from "./componentes/GifGrifAdd";
import GiftGrid from './componentes/GiftGrid';

export const  GifExpert = () => {
    const [categoria, setCategoria] = useState(["OnePunch"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <GifGrifAdd setCategoria={setCategoria}></GifGrifAdd>
            <hr></hr>

            <ol>
                {categoria.map((categoria) => (
                    <GiftGrid  key={categoria} categoria={categoria} />
                ))}
            </ol>
        </>
    );
};


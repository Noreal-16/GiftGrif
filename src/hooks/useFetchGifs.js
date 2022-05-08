import {useState, useEffect} from "react";
import {GetGifs} from "../helpers/GetGifs";
export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({data: [], loading: true});

    useEffect(() => {
        GetGifs(categoria).then((img) => {
            setState({data: img, loading: false});
        });
    }, [categoria]);

    return state;
};

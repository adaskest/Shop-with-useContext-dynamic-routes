import React, {useContext, useEffect} from 'react';
import context from "../context/context";
import OneProd from "./OneProd";

const AllProdC = () => {

    useEffect(() => {
        setPage('all')
    }, [])

    const {items, setPage} = useContext(context)

    return (
        <div className='all'>
            {items.map((item, i) => <OneProd key={i} prod={item}/>)}
        </div>
    );
};

export default AllProdC;
import React, {useContext, useEffect} from 'react';
import OneProd from "../components/OneProd";
import context from "../context/context";

const SingleItemP = () => {

    const {item, setPage} = useContext(context)
    useEffect(() => {
        setPage(null)
    })


    return (
        <div className='oneItem'>
            <OneProd prod={item}/>
        </div>
    );
};

export default SingleItemP;
import React, {useContext, useEffect} from 'react';
import context from "../context/context";
import ProdInShop from "./ProdInShop";

const CartC = () => {

    useEffect(() => {
        setPage('shop')
    }, [])

    const {setPage, cartItems} = useContext(context)

    return (
        <div>
            {cartItems.map((item, i) => <ProdInShop key={i} prod={item}/>)}
        </div>
    );
};

export default CartC;
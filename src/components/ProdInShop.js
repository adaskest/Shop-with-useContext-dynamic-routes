import React, {useContext} from 'react';
import context from "../context/context";

const ProdInShop = ({prod}) => {

    const {cartItems, setCartItems} = useContext(context)


    function addItem() {
        prod.itemsIn += 1
        return setCartItems([...cartItems])
    }


    function minusItem() {
        prod.itemsIn -= 1
        if (prod.itemsIn === 0) {
            return setCartItems(cartItems.filter(x => x.title !== prod.title))
        }
        return setCartItems([...cartItems])
    }


    return (
        <div className='product'>
            <img className='m-10' src={prod.photo} alt=""/>
            <div className='flex1'>
                <h1>Title: {prod.title}</h1>
                <h3>Price: {prod.price} Eur</h3>
            </div>
            <p className='flex1'>Description: {prod.description}</p>
            <h4 className='flex1'>Items in cart: {prod.itemsIn}</h4>
            <div>
                <div onClick={addItem} className="btn">Add</div>
                <div onClick={minusItem} className="btn">Remove</div>
            </div>
        </div>
    );
};

export default ProdInShop;
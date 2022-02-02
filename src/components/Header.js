import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import context from "../context/context";

const Header = () => {

    const {page, cartItems} = useContext(context)

    let total = 0

    function totalPrice() {
        cartItems.map(x => total += (Number(x.price)) * Number(x.itemsIn))
        return total
    }

    return (
        <div className='header'>
            <Link className={page === 'all' ? 'active': ''} to='/'>All products</Link>
            <Link className={page === 'create' ? 'active': ''} to='/create'>Create Product</Link>
            <Link className={page === 'shop' ? 'active': ''} to='/shop'>Shopping chart ({cartItems.length})</Link>
            {page === 'shop' && <h2>Total price: {totalPrice()}</h2>}
        </div>
    );
};

export default Header;
import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import context from "../context/context";

const OneProd = ({prod}) => {

    const [error, setError] = useState('')

    const nav = useNavigate()
    const {setItem, items, cartItems, setCartItems} = useContext(context)

    function goTo() {
        setItem(items.find(x => x.title === prod.title))
        const newTitle = prod.title.replace(' ', '-')
        nav('/item/' + newTitle)
    }

    function addToCart() {
        if (cartItems.includes(prod)) {
            setError('You already have it in the Shopping chart')
            setTimeout(() => {
                setError('')
            }, 1000)
        } else {
            prod.itemsIn += 1
            setCartItems([...cartItems, prod])
            nav('/shop')
        }
    }


    return (
        <div className='card'>
            <div className='m-10' onClick={goTo}>
                <img src={prod.photo} alt=""/>
                <h1>Title: {prod.title}</h1>
                <h3>Price: {prod.price} Eur</h3>
                <p>Description: {prod.description}</p>
            </div>
            <div onClick={addToCart} className="btn w-fit">Add to cart</div>
            <p>{error}</p>
        </div>
    );
};

export default OneProd;
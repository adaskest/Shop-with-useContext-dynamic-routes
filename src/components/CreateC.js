import React, {useContext, useEffect, useRef, useState} from 'react';
import context from "../context/context";
import {useNavigate} from "react-router-dom"

const CreateC = () => {
    const nav = useNavigate()

    useEffect(() => {
        setPage('create')
    }, [])

    const [error, setError] = useState('')
    const {items, setItems, setPage} = useContext(context)

    const titleRef = useRef()
    const descripRef = useRef()
    const photoRef = useRef()
    const priceRef = useRef()

    function product() {
        if (titleRef.current.value.length === 0) return setError('Enter title name')
        if (descripRef.current.value.length === 0) return setError('Enter description')
        if (!photoRef.current.value.includes('http')) return setError('Enter photo link \'http://...\'')
        if (priceRef.current.value.length === 0) return setError('Enter product price')
        setError('')
        const item = {
            title: titleRef.current.value,
            description: descripRef.current.value,
            photo: photoRef.current.value,
            price: priceRef.current.value,
            itemsIn: 0
        }
        setItems([...items, item])
        nav('/')
    }

    return (
        <div className='create'>
            <input ref={titleRef} type="text" placeholder='Title'/>
            <textarea ref={descripRef} rows={3} placeholder="Description"/>
            <input ref={photoRef} type="text" placeholder='Photo'/>
            <input ref={priceRef} type="number" placeholder='Price'/>
            <div onClick={product} className="btn">Create Product</div>
            <p>{error}</p>
        </div>
    );
};

export default CreateC;
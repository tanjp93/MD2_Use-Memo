import React from 'react';
import { useCallback, useState, useEffect, useMemo, memo, useRef } from 'react';


const Content = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProduct] = useState([])
    const nameref=useRef()
    // const [total,setTotal]=useState(0)

    const total = useMemo(() => {
        const result = products.reduce((total, price) => {
            console.log("tinh toan lai");
            return total + price.price
        }, 0)
        return result
    },[products])

    // const useRef=useRef()

    const handleSetName = (e) => {
        setName(e.target.value)
    }
    const handleSetPrice = (e) => {
        setPrice(Number(e.target.value))
    }
    const handleAdd = () => {
        setProduct(() => [...products, { name: name, price: price }])

        // setTotal(preTotal => preTotal + price)
        setName("")
        setPrice("")
        nameref.current.focus()
    }
    return (
        <div>
            <input type="text"
                value={name}
                onChange={e => handleSetName(e)}
                placeholder="Enter name ..."
                ref={nameref}

            />
            <br />
            <input type="number"
                value={price}
                placeholder="Enter price ..."
                onChange={e => handleSetPrice(e)}

            />
            <br />
            <button onClick={handleAdd}>Add</button>
            <br />
            <div> Total: {total}</div>
            <ul> {products.map((product, index) => (
                <li key={index}>{product.name} : {product.price} vnd</li>)
            )}</ul>
        </div>
    );
}

export default Content;

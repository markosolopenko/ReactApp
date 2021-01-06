import React, {useState} from 'react'


export const Context = React.createContext();

export const HandleDetail = (props) => {
    const [sum, setSum] = useState(0)
    const [count, setCount] = useState(0)
    const [detailsCount, setDetailsCount] = useState(0)
    const [product, setProduct] = useState({})
    const [sumOfAdded, setSumOfAdded] = useState(0);
    const values = {
        sum, setSum, count, setCount, sumOfAdded, setSumOfAdded,
        product, setProduct, detailsCount, setDetailsCount
    }
    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}

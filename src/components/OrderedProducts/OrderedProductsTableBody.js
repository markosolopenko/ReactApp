import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductToDetailsPage } from '../../features/productsSlice';

const TableBody = ({product, date}) => {
    const formSlice = useSelector(state => state.formSlice)
    const dispatch = useDispatch()
    return (
        <tr className="orderedTableBodyElement">
            <td className="ordersTableRow">{date}</td>
            <td className="ordersTableRow">{product.name}</td>
            <td className="ordersTableRow">{product.origin.toUpperCase()}</td>
            <td className="ordersTableRow">{formSlice.orderedProducts[product.name]}</td>
            <td className="ordersTableRow">{product.price}$</td>
            <Link to="/products/productsDetails" 
                onClick={() => dispatch(setProductToDetailsPage({product: product}))}
            >
                <td className="ordersTableRow">Details</td>
            </Link>
        </tr>
    )
}

export default TableBody
import React, {useEffect} from 'react';
import OrderedProductsBody from '../../components/OrderedProducts/OrderedProductsTable';
import HeaderOfPage from '../../components/Header/HeaderOfPage';
import { useDispatch, useSelector } from 'react-redux';
import '../../components/OrderedProducts/orderedProducts.css';
import { fetchOrderProductsByNickname } from '../../features/formSlice';

const OrderedProducts = () => {
    const store = useSelector(state => state)
    const {productsSlice, formSlice} = store
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOrderProductsByNickname("Timo"))
    }, [dispatch, formSlice.nickname])
    return (
        <div className="orderedProductsPage">
            <HeaderOfPage 
                sum={productsSlice.sumOfPricesAddedProducts} 
                count={productsSlice.amountAddedProducts} 
            />
            {formSlice.productByNickname.length > 0 ?
                <OrderedProductsBody 
                    orders={formSlice.productByNickname}
                />
                :
                <h1>Your history of order is Empty</h1>
            }
        </div>
    )
}

export default OrderedProducts
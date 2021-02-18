import React from 'react';
import TableHead  from './OrderProductsTableHead';
import TableBody from './OrderedProductsTableBody';

const OrderedProductsBody = ({orders}) => { 
    return (
        <div className="orderedProductsBody">
            <table className="orderedProductsTableTitle">
                <TableHead />  
                {
                    orders.map((order, id) => 
                        <TableBody 
                            key={id} 
                            products={order.orderedProducts} 
                            date={order.date}
                            amountOrderedProducts={order.amountOrderedProducts} 
                        />
                    )
                }
            </table>
        </div>
    )
}

export default OrderedProductsBody
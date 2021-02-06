import React from 'react';
import TableHead  from './OrderProductsTableHead';
import TableBody from './OrderedProductsTableBody';

const OrderedProductsBody = ({order, date}) => { 
    return (
        <div className="orderedProductsBody">
            <table className="orderedProductsTableTitle">
                <TableHead />
                {
                    <tbody className="orderedTableBody">   
                    {
                        order.map((product, id) => 
                            <TableBody key={id} product={product} date={date} />
                        )
                    }
                    </tbody> 
                }
    
            </table>
        </div>
    )
}

export default OrderedProductsBody
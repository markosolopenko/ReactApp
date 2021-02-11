import React from 'react';

const TableHead = () => {
    return (
        <thead className="orderedTableHead">
            <tr>
                <th className="tableTitleColumn">Date</th>
                <th className="tableTitleColumn">Name</th>
                <th className="tableTitleColumn">Origin</th>
                <th className="tableTitleColumn">Amount</th>
                <th className="tableTitleColumn">Price</th>
                <th className="tableTitleColumn"></th>
            </tr>
       </thead>
    )
}

export default TableHead
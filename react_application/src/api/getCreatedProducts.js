

export const getCreatedProducts = () => {
    return fetch('http://localhost:3001/products/createdProducts').then(res => {
        if(res.ok) {
            return res.json()
        }
    }).then(jsonRes => jsonRes);
}

export const getCreatedProductsById = (id) => {
    return fetch(`http://localhost:3000/products/${id}`).then(res => {
        if(res.ok) {
            return res.json()
        }
    }).then(jsonRes => jsonRes)
}
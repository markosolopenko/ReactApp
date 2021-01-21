

export const getProducts = (page, perPage) => {
    return ( 
        fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products?page=${page}&perPage=${perPage}`)
            .then((result) => result.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error
            })
    )
}   



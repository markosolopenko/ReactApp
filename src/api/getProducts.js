
export const getProducts = (page) => {
    return ( 
        fetch(`https://yalantis-react-school-api.yalantis.com/api/v1/products?page=${page}`
            )
            .then((result) => result.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error
            })
    )
}   



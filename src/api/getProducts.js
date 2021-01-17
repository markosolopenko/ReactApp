

export const getProducts = () => {
    return fetch('https://yalantis-react-school-api.yalantis.com/api/v1/products')
        .then((result) => result.json())
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error
        })
}   



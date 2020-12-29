

export default function getProducts() {
    return fetch('https://yalantis-react-school-api.yalantis.com/api/v1/products')
        .then((result) => result.json())
        .then((result) => {
            return result.items;
        })
        .catch((error) => {
            console.log(error)
        })
}   


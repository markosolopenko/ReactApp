
export const getProducts = ({page, perPage, origins, minPrice, maxPrice}) => {
    return ( 
        fetch("https://yalantis-react-school-api.yalantis.com/api/v1/products?" +
        "page=" + page + 
        "&perPage=" + perPage + 
        "&origins=" + origins + 
        "&minPrice=" + minPrice + 
        "&maxPrice=" + maxPrice
        
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



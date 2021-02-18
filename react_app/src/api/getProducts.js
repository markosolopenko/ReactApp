import axios from 'axios';

export const getProducts = ({page, perPage, origins, minPrice, maxPrice}) => {
    return axios("https://yalantis-react-school-api.yalantis.com/api/v1/products?" +
        "page=" + page + 
        "&perPage=" + perPage +
        "&origins=" + origins +
        "&minPrice=" + minPrice + 
        "&maxPrice=" + maxPrice
    ).then(res => res.data);
}   

export const getProdcutById = (id) => {
    return axios(`https://yalantis-react-school-api.yalantis.com/api/v1/products/${id}`)
        .then(res => res.data);
}

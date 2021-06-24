
import axios from 'axios';
//import { getToken } from '@/services/auth';

export const fetchProducts = () => {
    return axios.get(
        `/product`,
        /*{
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }*/
    )
                .then( response => response.data )
};

export const addProduct = ( data ) => {
    //console.log(data)
    return axios.post(`/product`,
    data, 
    {
            headers: {
                'Content-Type': 'application/json'
            }
    },
    { withCredentials: true }
    )
     .then(response => response.data)
     .catch(error => error.message 
     ); 
    
};

export const deleteProductById = ( id ) => {
    return axios.delete( `/product/${id}`,
    /*{ withCredentials: true }*/
     )
                .then( response => response.data )
};
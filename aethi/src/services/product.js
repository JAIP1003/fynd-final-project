
import axios from 'axios';
//import { getToken } from '@/services/auth';

export const fetchProducts = () => {
    return axios.get(
        `http://localhost:4000/product`,
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
    return axios.post(`http://localhost:4000/product`,
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
    return axios.delete( `http://localhost:4000/product/${id}`,
    /*{ withCredentials: true }*/
     )
                .then( response => response.data )
};
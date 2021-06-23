import axios from 'axios';
import { successHandler, errorHandler } from './helper';


export const login =( credentials ) =>{

   return axios.post(`http://localhost:4000/auth/login`,credentials,
        {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    )   //console.log(localStorage.getItem( 'token' ))
    .then( successHandler )
    .catch( errorHandler );
};
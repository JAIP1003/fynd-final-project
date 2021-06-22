import axios from 'axios'


export const fetchUser = ( data ) => {
        //console.log(data)
        return axios.post(`https://mymeetingsapp.herokuapp.com/api/auth/register`,data
        )
         .then(response => response.data)
         .catch(error => error.message 
         ); 
        
 }
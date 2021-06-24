import axios from 'axios'


export const registerUser = ( data ) => {
        //console.log(data)
        return axios.post(`http://localhost:4000/auth/register`,
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
import axios from 'axios';
// import { BehaviorSubject } from 'rxjs';
// import config from '@/config';
import { successHandler, errorHandler } from './helper';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';

// credentials = { email: string, password: string }
const login = ( credentials ) => {
    return axios.post(
                `http://localhost:4000/auth/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },
                { withCredentials: true }
            )
                .then( successHandler )
                .then( data => {
                    const { token, email } = data;

                    localStorage.setItem( KEY_TOKEN, token );
                    localStorage.setItem( KEY_EMAIL, JSON.stringify( email ) );

                    // dispatchAuthEvents();

                    return email;
                })
                .catch( errorHandler );
};

const logout = () => {
    localStorage.removeItem( KEY_TOKEN );
    localStorage.removeItem( KEY_EMAIL );

    // dispatchAuthEvents();
};

const isAuthenticated = () => {
    return !!localStorage.getItem( KEY_TOKEN );
};

const getEmail = () => {
    return JSON.parse( localStorage.getItem( KEY_EMAIL ) );
};

const getToken = () => {
    return localStorage.getItem( KEY_TOKEN );
};


export {
    login,
    logout,
    isAuthenticated,
    getToken,
    getEmail
};
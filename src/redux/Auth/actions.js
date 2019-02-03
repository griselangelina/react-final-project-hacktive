
import axios from 'axios';

export const getLoginRequest = (limit) =>{
    return{
        type:'GET_LOGIN_REQUEST'
    }
}

export const getLoginSuccess = (token, userId) => {
    return {
        type:'GET_LOGIN_SUCCESS',
        idToken: token,
        userId: userId
    };
};

export const getLoginError = (payload) =>{
    return{
        type:'GET_LOGIN_ERROR',
        payload
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime );
    };
};

export const login = (email, password, isSignup) => {
    return dispatch => {
        dispatch(getLoginRequest());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDn4rSLhhR9CIjHdBz7ucn11yUztXjbPvE';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDn4rSLhhR9CIjHdBz7ucn11yUztXjbPvE';
        }
        axios.post(url, authData)
            .then(response => {
                dispatch(getLoginSuccess(response.data.idToken, response.data.localId));
                //dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(getLoginError(err.response.data.error));
            });
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const clear= () => ({
    type: 'CLEAR',
});
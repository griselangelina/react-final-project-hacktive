const initialState={
    isLogin: false,
    token:"",
    isLoading:false,
    user:"",
    error:{
        message:'',
        status:false,
    }
}

const Auth = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){

        case 'GET_LOGIN_REQUEST':
            return{
                ...state,
                isLoading:true,

            }
        case 'GET_LOGIN_SUCCESS':
            return{
                ...state,
                isLoading:false,
                token:action.idToken,
                user:action.userId,
                isLogin:true
            }
        case 'GET_LOGIN_ERROR':
            return{
                ...state,
                isLoading:false,
                error:{
                    message:action.payload.message,
                    status:true
                }
            }
        case 'LOGOUT':
            return{
                ...state,
                isLogin:false,
                error:{
                    message:"",
                    status:false
                }
            }
        case 'CLEAR':
            return{
                ...state,
                isLogin:false,
                error:{
                    message:"",
                    status:false
                }
            }
        default:
        return state
    }
}

export default Auth;
const initialState={
    isLogin: false,
    name:'',
    rumah:[],
    pengalaman:[],
    restoran:[],
    detail:[],
    ulasan:[],
    rekomendasi:[],
    list:null,
    isLoading:false,
    error:{
        message:'',
        status:false,
    }
}

const Counter = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                isLogin:true,
                name:action.payload
            }

        case 'LOGOUT':
            return{
                ...state,
                isLogin:false,
                name:''
            }
        case 'GET_RUMAH_DATA_REQUEST':
            return{
                ...state,
                isLoading:true,

            }
        case 'GET_RUMAH_DATA_SUCCESS':
            return{
                ...state,
                isLoading:false,
                rumah:action.payload,
            }
        case 'GET_ALL_DATA_SUCCESS':
            return{
                ...state,
                isLoading:false,
                rumah:action.payload.Rumah,
                pengalaman:action.payload.Pengalaman,
                restoran:action.payload.Restoran,
            }
        case 'GET_RUMAH_DATA_ERROR':
            return{
                ...state,
                isLoading:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }    
            case 'GET_RUMAH_DETAIL_REQUEST':
            return{
                ...state,
                isLoading:true,

            }
        case 'GET_RUMAH_DETAIL_SUCCESS':
            return{
                ...state,
                isLoading:false,
                detail:action.payload,
                ulasan:action.payload.ulasan
            }
        case 'GET_RUMAH_DETAIL_ERROR':
            return{
                ...state,
                isLoading:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }    
        case 'GET_REKOMENDASI_REQUEST':
            return{
                ...state,
                isLoading:true

            } 
        case 'GET_REKOMENDASI_SUCCESS':
            return{
                ...state,
                isLoading:false,
                rekomendasi:action.payload,
            }   
        case 'GET_REKOMENDASI_ERROR':
            return{
                ...state,
                isLoading:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }         
        default:
        return state
    }
}

export default Counter;
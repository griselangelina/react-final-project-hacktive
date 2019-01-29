
import axios from 'axios';

export const getRekomedasi = () =>{
    return (dispatch) =>{
        dispatch(getRekomendasiRequest())
        axios.get('https://testingdb-7a13b.firebaseio.com/rekomendasi.json')
        .then(response => {
            dispatch(getRekomendasiSuccess(response.data))
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getRekomendasiError(error))
        })

    }
}
export const getRumahData = (id) =>{
    return (dispatch) =>{
        dispatch(getRumahDataRequest())
        axios.get('https://testingdb-7a13b.firebaseio.com/kategori/'+id+'.json')
        .then(response => {
            dispatch(getRumahDataSuccess(response.data))
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getRumahDataError(error))
        })

    }
}

export const getAllData = () =>{
    return (dispatch) =>{
        dispatch(getRumahDataRequest())
        axios.get('https://testingdb-7a13b.firebaseio.com/kategori.json')
        .then(response => {
            dispatch(getAllDataSuccess(response.data))
            //console.log(response.data.Pengalaman)
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getRumahDataError(error))
        })

    }
}

export const getRumahDetail = (ctg,id) =>{
    return (dispatch) =>{
        dispatch(getRumahDetailRequest())
        axios.get('https://testingdb-7a13b.firebaseio.com/kategori/'+ctg+'/'+id+'.json')
        .then(response => {
            dispatch(getRumahDetailSuccess(response.data))
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getRumahDetailError(error))
        })

    }
}

export const getRekomendasiRequest = () =>{
    return{
        type:'GET_REKOMENDASI_REQUEST'
    }
}


export const getRekomendasiSuccess = (payload) =>{
    return{
        type:'GET_REKOMENDASI_SUCCESS',
        payload
    }
}

export const getRekomendasiError = (payload) =>{
    return{
        type:'GET_REKOMENDASI_ERROR',
        payload
    }
}

export const getAllDataSuccess = (payload) =>{
    return{
        type:'GET_ALL_DATA_SUCCESS',
        payload
    }
}




















export const getRumahDataRequest = (limit) =>{
    return{
        type:'GET_RUMAH_DATA_REQUEST'
    }
}


export const getRumahDataSuccess = (payload) =>{
    return{
        type:'GET_RUMAH_DATA_SUCCESS',
        payload
    }
}

export const getRumahDataError = (payload) =>{
    return{
        type:'GET_RUMAH_DATA_ERROR',
        payload
    }
}

export const getRumahDetailRequest = (limit) =>{
    return{
        type:'GET_RUMAH_DETAIL_REQUEST'
    }
}


export const getRumahDetailSuccess = (payload) =>{
    return{
        type:'GET_RUMAH_DETAIL_SUCCESS',
        payload
    }
}

export const getRumahDetailError = (payload) =>{
    return{
        type:'GET_RUMAH_DETAIL_ERROR',
        payload
    }
}
export const login = (payload) => ({
    type: 'LOGIN',
    payload,
});

export const logout = () => ({
    type: 'LOGOUT',
});
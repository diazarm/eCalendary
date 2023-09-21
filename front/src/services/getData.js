import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);


const getToken = () => localStorage.getItem("token")
export const postDataPrivate = async ({ url, data }) => {

    const token = getToken()

    const response = await axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
            Authorization: 'JWT ' + token
        }
    }).then((response) => {
        console.log('Es la data recibida ', { response })
    }).catch(error => {
        console.log('Error al hacer la peticion', { error })
    })
    return response
}

// export const getDataPrivate = async (url) => {

//     const token = getToken()

//     try {
//         const response = await axios({
//             method: 'get',
//             url: url,
//             headers: {
//                 Authorization: 'JWT ' + token
//             }
//         })
//         return response.data

//     } catch (error) {
//         console.log(error.response.data);
//         return error.response.data;
//     }

// }
export const getDataPrivate = async (url) => {

    const token = getToken()
    
    try {
        const response = await axios(
            {
                method: 'get',
                url: url,
                headers: {
                    Authorization: 'JWT ' + token
                }
            }
        ).then(response => response.data);
        return response;

    } catch (error) {
        return error.response.data        
    }
}

export const fetchEndpoint = async (url) => {
    try {
        const response = await axios.get(url).then(response => response.data);
        const user = createAdapterUser(response)
        return user;

    } catch (error) {
        return error        
    }
}

export const fetcherGetDataPrivate = url => axios.get(url).then(res => res.data)
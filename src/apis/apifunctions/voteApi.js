import axiosIstance from "../axiosApi";


export const sendVoteToken = async(data) =>{
    try {
        // const userDetails = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
        const response = await axiosIstance.post('vote/token', data);
        return response.data;
    } catch (error) { 
        console.log('error', error)
        if(error.response.status === 404){
            throw new Error(error.response.data.message)
        }
        throw new Error("Network Error");
    } 
}


export const verifyToken = async(data) =>{  
    try {
        const token = localStorage.getItem("access_token")?localStorage.getItem("access_token"):null
        console.log('token', token)
        const response = await axiosIstance.post('vote/token/verify', data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) { 
      
        if(error?.response?.status === 404){
            throw new Error(error.response.data.message)
        }if(error?.response?.status === 401){
            throw new Error(error.response.data.message)
        }
        throw new Error("Network Error");
    } 
}
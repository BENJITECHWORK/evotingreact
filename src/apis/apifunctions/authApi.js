import axiosIstance from "../axiosApi";


export const loginApi = async(data) =>{
    try {
        const response = await axiosIstance.post('login/', data);
        console.log('response', response.data.message)
    
        return response.data;

    } catch (error) { 
        if(error.response.status === 404){
            throw new Error(error.response.data.message)
        }
        throw new Error("Network Error");
    }
    
}


export const registerApi = async(data) =>{
    try {
        const response = await axiosIstance.post('register/', data);
        return response.data
    } catch (error) {
        if(error.response.status === 404){
            throw new Error(error.response.data.message)
        }
        throw new Error("Network Error");
    }
  
}

/* Password reset */

export const sendMailForPasswordReset = async (data) => {
    try {
        const response = await axiosIstance.post('password_reset/', data,{
            withCredentials: true
        });
        return response.data
    } catch (error) {
        
        if(error.code === "ERR_NETWORK"){
            throw new Error("Opps Network Error")
        }
        if(error.response.status === 400){
            throw new Error(error.response.data.email[0]);
        }
      
    }
}

/* Account verification */
export const verifyAccount = async (data) => {
    try {
        const response = await axiosIstance.post('verify_code/', data,{
            withCredentials: true
        });
        return response.data
    } catch (error) {
        if(error.code === "ERR_NETWORK"){
            throw new Error("Opps Network Error")
        }
        if(error.response.status === 400){
            throw new Error(error.response.data.error)
        }else if (error.response.status === 500){
            throw new Error("User doesnot exist");
        }else{
            throw new Error("Something went wrong");
        }
    }
}



/* Account verification */
export const resendCodeApiCall = async (data) => {
    try {
        const response = await axiosIstance.post('resend_code/', data,{
            withCredentials: true
        });
        return response.data
    } catch (error) {
        if(error.code === "ERR_NETWORK"){
            throw new Error("Opps Network Error")
        }
        if(error.response.status === 400){
            throw new Error(error.response.data.error)
        }else if (error.response.status === 500){
            throw new Error("User doesnot exist");
        }else{
            throw new Error("Something went wrong");
        }
    }
}


/* Account verification */
export const confirmpassCall = async (data) => {
    try {
        const response = await axiosIstance.post('password_reset/confirm/', data,{
            withCredentials: true
        });

        return response.data

    } catch (error) {
        console.log('error', error)
        if(error.code === "ERR_NETWORK"){
            throw new Error("Opps Network Error")
        }
        if(error.response.status === 400){
            throw new Error(error.response.data.error)
        }else if (error.response.status === 500){
            throw new Error("User doesnot exist");
        }else{
            throw new Error("Something went wrong");
        }
    }
}

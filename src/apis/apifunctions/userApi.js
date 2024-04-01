import axiosIstance from "../axiosApi";

export const setFirstNameApi = async(data) =>{
    try {
        const access_token = localStorage.getItem("access_token")? localStorage.getItem("access_token"):null
        const response = await axiosIstance.post('update_profile/', data,{
                withCredentials: true,
                headers:{
                    Authorization: `Bearer ${access_token}`
                }
            });

        return response.data;

    } catch (error) {
        console.log('set name', error)
        if (error.response && error.response.status === 401) {
            throw new Error("Unauthorized");
        } else if(error.response && error.response.status === 404){
            throw new Error(error.response.data.error)
        } else if(error.response && error.response.status === 500){
            throw new Error("Internal Server Error");
        }
         else 
        {
            throw new Error("Network Error");
        }
    }
    
}
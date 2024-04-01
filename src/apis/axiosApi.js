import axios from 'axios';


// const baseURL = 'https://univesell-402a914c-c431-47e4-82d5.cranecloud.io/api/'; 
const baseURL = "http://localhost:4000/api/v1"

const JWT = localStorage.getItem("access_token")? localStorage.getItem("access_token"):null

const axiosInstance = axios.create({
    baseURL: baseURL,
    // timeout: 5000,
    headers: {
        Authorization:JWT,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});




export default axiosInstance;
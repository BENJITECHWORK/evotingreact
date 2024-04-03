import axios from 'axios';


// const baseURL = 'http://localhost:4000/api/v1'; 
const baseURL = "https://evotingtesttwo-f7b5ec48-5106-466c-b2e3.cranecloud.io/api/v1"

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
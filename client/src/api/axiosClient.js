import axios from "axios"
// import { response } from "../../../server";
const BASE_URL = "http://localhost:5000/api/v1";

const axiosClient = axios.create({
    baseURL: BASE_URL,
});

//APIを叩く前の処理
axiosClient.interceptors.request.use(async(config) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
        },
    };
});




//APIを叩いた後の処理(Response用)
axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },(err) => {
        throw err.response;
    });



export default axiosClient;







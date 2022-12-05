import axios from 'axios'; 

const BASE_URL = 'http://localhost:3000/api/v1/'
const axiosInstance = axios.create({
    baseURL: BASE_URL
 });

 export const sendHttpRequest = {
    getAll: (endpoint: string) => {
        return axiosInstance.request({
            method: "GET",
            url: endpoint
        });
    },
    getById: (endpoint: string) => {
        return axiosInstance.request({
            method: "GET",
            url: endpoint
        });
    },
    create: (endpoint: string, data?: any) => {
        return axiosInstance.request({
            method: "POST",
            url: endpoint,
            data: data
        });
    },
    update: (endpoint: string, data?: any) => {
        return axiosInstance.request({
            method: "PUT",
            url: endpoint,
            data: data,
        });
    },
    delee: (endpoint: string) =>{
        return axiosInstance.request({
            method: "DELETE",
            url: endpoint,
        });
    },
}
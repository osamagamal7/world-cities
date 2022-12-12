import axios from 'axios'; 
import { PostType, PostTypeWithTimestamp } from '../models/PostModel';

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
    create: (endpoint: string, data: PostType) => {
        return axiosInstance.request({
            method: "POST",
            url: endpoint,
            data: data
        });
    },
    update: (endpoint: string, data: PostTypeWithTimestamp) => {
        return axiosInstance.request({
            method: "PUT",
            url: endpoint,
            data: data,
        });
    },
    delete: (endpoint: string) =>{
        return axiosInstance.request({
            method: "DELETE",
            url: endpoint,
        });
    },
}
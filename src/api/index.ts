import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://fake-api.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'content-type': 'application/octet-stream',
    },
});

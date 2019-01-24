import axios from 'axios';

const API_ROOT = 'http://5c393250b9bfb20014f71477.mockapi.io';

const client = axios.create({
    baseURL: API_ROOT,
    timeout: 10000,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    // proxy: {
    //     host: '104.236.174.88',
    //     port: 3128
    // }
})

export const getApiServices = (path) => client.get(path).then(response => response);
export const putApiServices = ({path, payload}) => client.put(path, payload).then(response => response);
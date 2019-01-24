import axios from 'axios';
import { getApiServices } from './api';

const API_ROOT = 'http://5c393250b9bfb20014f71477.mockapi.io';

export const fetchUsersFromApi = () => getApiServices('/users');
// export const updateUsersFromApi = (payload) => putApiServices(`/users/${payload.id}`,payload);
export const updateUsersFromApi = (payload) => axios.put(`${API_ROOT}/users/${payload.id}`, payload);
import axios from 'axios';
import { API_BASE_URL } from '../constants';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ',
    })
});

export const

    getContas = () => client.get('/contas');
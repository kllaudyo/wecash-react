import axios from 'axios';
import { API_BASE_URL } from '../constants';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c3VhcmlvIjoxLCJpZF9lbXByZXNhIjoxfQ.qx519vFvlrf49F4eyRZZNmqHmEyoIDMC37Hs7IOrUlA',
    }
});


export const

    getContas = () => client.get('/contas'),
    getCategorias = () => client.get('/categorias'),
    getMovimentos = () => client.get('/movimentos'),
    getUsuarios = () => client.get('/usuarios');
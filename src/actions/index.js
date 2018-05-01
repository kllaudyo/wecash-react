import {
    FETCH_CONTAS_STARTED,
    FETCH_CONTAS_SUCCESS,
    FETCH_CONTAS_FAILED,
    FETCH_CATEGORIAS_SUCCESS,
    FETCH_CATEGORIAS_STARTED,
    FETCH_CATEGORIAS_FAILED,
    FETCH_MOVIMENTOS_SUCCESS,
    FETCH_MOVIMENTOS_STARTED,
    FETCH_MOVIMENTOS_FAILED
} from "../constants";

import * as api from '../api';

export const

    fetchContasStarted = () => ({
        type: FETCH_CONTAS_STARTED
    }),

    fetchCategoriasStarted = () => ({
        type: FETCH_CATEGORIAS_STARTED
    }),

    fetchMovimentosStarted = () => ({
        type: FETCH_MOVIMENTOS_STARTED
    }),

    fetchContasSuccess = contas => ({
        type : FETCH_CONTAS_SUCCESS,
        contas
    }),

    fetchCategoriasSuccess = categorias => ({
        type: FETCH_CATEGORIAS_SUCCESS,
        categorias
    }),

    fetchMovimentosSuccess = movimentos => ({
        type: FETCH_MOVIMENTOS_SUCCESS,
        movimentos
    }),

    fetchContasFailed = error => ({
        type: FETCH_CONTAS_FAILED,
        error
    }),

    fetchCategoriasFailed = error => ({
        type: FETCH_CATEGORIAS_FAILED,
        error
    }),

    fetchMovimentosFailed = error => ({
        type: FETCH_MOVIMENTOS_FAILED,
        error
    }),

    fetchContas = () => dispatch => {
        dispatch(fetchContasStarted());
        api.getContas()
            .then( res => dispatch(fetchContasSuccess(res.data)))
            .catch( err => dispatch(fetchContasFailed( err.message)))
    },

    fetchCategorias = () => dispatch => {
        dispatch(fetchCategoriasStarted());
        api.getCategorias()
            .then( res => dispatch(fetchCategoriasSuccess(res.data)))
            .catch( err => dispatch(fetchCategoriasFailed(err.message)))
    },

    fetchMovimentos = () => dispatch => {
        dispatch(fetchMovimentosStarted());
        api.getMovimentos()
            .then( res => dispatch(fetchMovimentosSuccess(res.data)))
            .catch( err => dispatch(fetchMovimentosFailed(err.message)))
    }
;

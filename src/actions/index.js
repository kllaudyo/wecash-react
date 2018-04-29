import {
    FETCH_CONTAS_STARTED,
    FETCH_CONTAS_SUCCESS,
    FETCH_CONTAS_FAILED
} from "../constants";

import * as api from '../api';

export const

    fetchContasSuccess = contas => ({
        type : FETCH_CONTAS_SUCCESS,
        contas
    }),

    fetchContasFailed = error => ({
        type: FETCH_CONTAS_FAILED,
        error
    }),

    fetchContasStarted = () => ({
        type: FETCH_CONTAS_STARTED,
    }),

    fetchContas = () => dispatch => {
        dispatch(fetchContasStarted());
        api.getContas()
            .then( res => dispatch(fetchContasSuccess(res.data)))
            .catch( err => dispatch(fetchContasFailed( err.message)))
    }
;

import {
    FETCH_CONTAS_STARTED,
    FETCH_CONTAS_SUCCESS,
    FETCH_CONTAS_FAILED,
    FETCH_CATEGORIAS_SUCCESS,
    FETCH_CATEGORIAS_STARTED,
    FETCH_CATEGORIAS_FAILED,
    FETCH_MOVIMENTOS_SUCCESS,
    FETCH_MOVIMENTOS_STARTED,
    FETCH_MOVIMENTOS_FAILED, FETCH_USUARIOS_SUCCESS, FETCH_USUARIOS_STARTED, FETCH_USUARIOS_FAILED
} from "../constants";

const initialState = {
    contas:[],
    categorias:[],
    movimentos:[],
    usuarios:[],
    isLoading:false,
    error:null
};

const root = (state=initialState, action) => {
    const {contas, categorias, movimentos, usuarios, error} = action;
    switch (action.type) {
        case FETCH_CONTAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                contas:contas.map(({id_conta, ds_conta}) => ({id_conta, ds_conta}))
            };
        case FETCH_CATEGORIAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                categorias: categorias.map(({id_categoria, ds_categoria, tp_categoria}) => ({id_categoria, ds_categoria, tp_categoria}))
            };
        case FETCH_MOVIMENTOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                movimentos: movimentos.map(({id_movimento, id_conta, ds_conta, id_categoria, ds_categoria, tp_categoria, ds_movimento, dt_previsao, dt_confirmacao, vl_previsto, vl_confirmado}) =>
                    ({
                        id_movimento,
                        id_conta,
                        ds_conta,
                        id_categoria,
                        ds_categoria,
                        tp_categoria,
                        ds_movimento,
                        dt_previsao,
                        dt_confirmacao,
                        vl_previsto,
                        vl_confirmado
                    }))
            };
        case FETCH_USUARIOS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                error: null,
                usuarios: usuarios.map(({id_usuario, nm_usuario, nm_email, dt_cadastro}) => ({id_usuario, nm_usuario, nm_email, dt_cadastro}))
            };
        case FETCH_USUARIOS_STARTED:
        case FETCH_MOVIMENTOS_STARTED:
        case FETCH_CATEGORIAS_STARTED:
        case FETCH_CONTAS_STARTED:
            return {
                ...state,
                isLoading:true
            };
        case FETCH_USUARIOS_FAILED:
        case FETCH_CATEGORIAS_FAILED:
        case FETCH_MOVIMENTOS_FAILED:
        case FETCH_CONTAS_FAILED:
            return {
                ...state,
                isLoading:false,
                error
            };
        default:
            return state;
    }
};

export default root;
import {
    FETCH_CONTAS_STARTED,
    FETCH_CONTAS_SUCCESS,
    FETCH_CONTAS_FAILED,
    FETCH_CATEGORIAS_SUCCESS,
    FETCH_CATEGORIAS_STARTED,
    FETCH_CATEGORIAS_FAILED
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
    const {contas, categorias, error} = action;
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
        case FETCH_CATEGORIAS_STARTED:
        case FETCH_CONTAS_STARTED:
            return {
                ...state,
                isLoading:true
            };
        case FETCH_CATEGORIAS_FAILED:
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
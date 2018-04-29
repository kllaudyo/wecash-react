import {
    FETCH_CONTAS_STARTED,
    FETCH_CONTAS_SUCCESS,
    FETCH_CONTAS_FAILED
} from "../constants";

const initialState = {
    contas:[],
    isLoading:false,
    error:null
};

const root = (state=initialState, action) => {
    const {contas, error} = action;
    switch (action.type) {
        case FETCH_CONTAS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                contas:contas.map(({id_conta, ds_conta}) => ({id_conta, ds_conta}))
            };
        case FETCH_CONTAS_STARTED:
            return {
                ...state,
                isLoading:true
            };
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
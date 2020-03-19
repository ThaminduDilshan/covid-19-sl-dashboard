import {FETCH_STAT_PENDING, FETCH_STAT_SUCCESS, FETCH_STAT_ERROR} from '../action_creators/statAction';

const initState = {
    pending: false,
    error: false,
    update_dt: null,
    data: null
}

const statReducer = (state=initState, action) => {
    switch(action.type) {
        case FETCH_STAT_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_STAT_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data.data,
                update_dt: action.data.data.update_date_time
            }
        case FETCH_STAT_ERROR:
            return {
                ...state,
                pending: false,
                error: true
            }
        default:
            return state
    }
};

export default statReducer;

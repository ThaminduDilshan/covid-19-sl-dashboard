export const FETCH_STAT_PENDING = 'FETCH_STAT_PENDING';
export const FETCH_STAT_SUCCESS = 'FETCH_STAT_SUCCESS';
export const FETCH_STAT_ERROR = 'FETCH_STAT_ERROR';

export const fetchStatPending = () => {
    return {
        type: FETCH_STAT_PENDING
    }
};

export const fetchStatSuccess = (data) => {
    return {
        type: FETCH_STAT_SUCCESS,
        data
    }
};

export const fetchStatError = (error) => {
    return {
        type: FETCH_STAT_ERROR,
        error
    }
};

import {fetchStatPending, fetchStatSuccess, fetchStatError} from '../action_creators/statAction';
import axios from 'axios';

const fetchStats = () => {
    return dispatch => {
        dispatch(fetchStatPending());
        axios.get('http://hpb.health.gov.lk/api/get-current-statistical')
        .then(res => {
            if(res.status!==200) {
                throw(res.error);
            }
            dispatch(fetchStatSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(fetchStatError(err));
        });
    }
}

export default fetchStats;

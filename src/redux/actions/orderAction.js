import {GET_ALL_ORDER , GET_ONE_ORDER , CHANGE_ORDER_PAY , CHANGE_ORDER_DELIVER} from '../type'
import { useGetDataToken } from '../../hooks/useGetData';
import {useInsUpdateData} from '../../hooks/useUpdateData';

export const orderAction = (page,limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_ORDER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_ORDER,
            payload: e.response,
        })
    }
}

export const getOneOrder= (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders/${id}`);
        dispatch({
            type: GET_ONE_ORDER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ONE_ORDER,
            payload: e.response,
        })
    }
}

export const changeOrderDeliver = (id) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/orders/${id}/deliver`);
        dispatch({
            type:   CHANGE_ORDER_DELIVER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CHANGE_ORDER_DELIVER,
            payload: e.response,
        })
    }
}

export const changeOrderPay = (id) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/orders/${id}/pay`);
        dispatch({
            type:   CHANGE_ORDER_PAY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CHANGE_ORDER_PAY,
            payload: e.response,
        })
    }
}
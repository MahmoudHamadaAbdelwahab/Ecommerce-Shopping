import { useGetDataToken } from '../../hooks/useGetData';
import { useInsertData } from '../../hooks/useInsertData'
import {CREATE_ORDER_CASH , CREATE_ORDER_CARD} from '../type'

// create order cash from user 
export const createOrderCash = (id , body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/orders/${id}`, body);
        console.log(response)
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response,
        })
    }
}

// create order card from user 
export const createOrderCard = (id , body) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders/checkout-session/${id}`, body);
        console.log(response)
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: e.response,
        })
    }
}

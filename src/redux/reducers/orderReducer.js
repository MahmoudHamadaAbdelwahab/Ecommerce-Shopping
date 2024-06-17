import {GET_ALL_ORDER , GET_ONE_ORDER , CHANGE_ORDER_PAY , CHANGE_ORDER_DELIVER} from '../type'

const initial = {
    getAllOrders: [],
    getOneOrders: [],
    changeOrderPay: [],
    changeOrderDeliver: [],
}
const OrderReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_ORDER:
            return {
                ...state,
                getAllOrders: action.payload,
            }
        case GET_ONE_ORDER:
            return {
                ...state,
                getOneOrders: action.payload,
            }
        case CHANGE_ORDER_PAY:
            return {
                ...state,
                changeOrderPay: action.payload,
            }
        case CHANGE_ORDER_DELIVER:
            return {
                ...state,
                changeOrderDeliver: action.payload,
            }
        default:
            return state;
    }
}

export default OrderReducer
import {ADD_PRODUCT_TO_CART , GET_ALL_USER_CARD , CLEAR_ALL_CART_ITEM , DELETE_ITEM_FROM_CART , UPDATE_ITEM_FROM_CART , APPLY_COUPON_CART} from '../type'

const initial = {
    addToCart: [],
    getAllUserCard: [],
    clearAllCard: [],
    deleteCardItem: [],
    updateCardItem: [],
    applyCouponCart: [],
    loading: true,
}
const cartReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                addToCart: action.payload,
                loading: false,
            }
        case GET_ALL_USER_CARD:
            return {
                ...state,
                getAllUserCard: action.payload,
                loading: false,
            }
        case CLEAR_ALL_CART_ITEM:
            return {
                ...state,
                clearAllCard: action.payload,
                loading: false,
            }
        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                deleteCardItem: action.payload,
                loading: false,
            }
        case UPDATE_ITEM_FROM_CART:
            return {
                ...state,
                updateCardItem: action.payload,
                loading: false,
            }
        case APPLY_COUPON_CART:
            return {
                ...state,
                applyCouponCart: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
export default cartReducer
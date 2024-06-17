import { ADD_PRODUCT_TO_CART , GET_ALL_USER_CARD , CLEAR_ALL_CART_ITEM , DELETE_ITEM_FROM_CART , UPDATE_ITEM_FROM_CART , APPLY_COUPON_CART} from '../type'
import { useInsertData } from '../../hooks/useInsertData';
import {useGetDataToken } from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';
import { useInsUpdateData } from '../../hooks/useUpdateData';

// add Product To Card
export const addProductToCard = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/cart`,body);
        console.log(response)
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: "Error " + e.response,
        })
    }
}

// get All user Card item
export const getAllUserCardItems = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/cart`);
        dispatch({
            type: GET_ALL_USER_CARD,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_USER_CARD,
            payload: "Error " + e.response,
        })
    }
}

// clear all cart items
export const clearAllCartItem = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart`);
        console.log(response)
        dispatch({
            type: CLEAR_ALL_CART_ITEM,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_USER_CARD,
            payload: "Error " + e.response,
        })
    }
}

// delete cart item
export const deleteCartItem = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${id}`);
        console.log(response)
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: "Error " + e.response,
        })
    }
}

// update cart item
export const updateCartItem = (id , body) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/cart/${id}` , body);
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: "Error " + e.response,
        })
    }
}

// apply  coupon cart 
export const applyCouponCart = () => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/api/v1/cart/applyCoupon`);
        dispatch({
            type: APPLY_COUPON_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: APPLY_COUPON_CART,
            payload: "Error " + e.response,
        })
    }
}
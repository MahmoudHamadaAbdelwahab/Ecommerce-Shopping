import { GET_ALL_CATEGORY, GET_ONE_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../type'

const initial = {
    allCategory:[],
    createCategory: [],
    oneCategory: [],
    loading: true,
}
const categoryReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                allCategory: action.payload,
                loading: false,
            }
        case GET_ONE_CATEGORY:
            return {
                oneCategory: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            return {
                createCategory: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    }
}
export default categoryReducer
import {
    RENDER_SET_ITEM,
    RENDER_ALL_ITEMS,
    RENDER_FILTERED_ITEMS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    STORE_GRAND_TOTAL,
    USER_INFO,
    CHANGE_ITEM_COLOR
} from './types';


export const renderSetItem = (item) => dispatch => {
    dispatch({
        type: RENDER_SET_ITEM,
        payload: item
    })
}

export const renderAllItems = (boolean) => dispatch => {
    dispatch({
        type: RENDER_ALL_ITEMS,
        payload: boolean
    })
}

export const renderFilteredItems = (option) => dispatch => {
    dispatch({
        type: RENDER_FILTERED_ITEMS,
        payload: option
    })
}

export const addToCart = (cartItemObject) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: cartItemObject
    })
}

export const removeFromCart = (index) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: index
    })
}

export const storeGrandTotal = (grandTotal) => dispatch => {
    dispatch({
        type: STORE_GRAND_TOTAL,
        payload: grandTotal
    })
}

export const submitUserInfo = (userInfoObject) => dispatch => {
    dispatch({
        type: USER_INFO,
        payload: userInfoObject
    })
}

export const changeItemColor = (colorObject) => dispatch => {
    dispatch({
        type: CHANGE_ITEM_COLOR,
        payload: {
            itemColor: colorObject
        }
    })
}



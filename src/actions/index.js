import * as types from '../action-types/index';

export const getProducts = () => ({
    type: types.GET_PRODUCTS
});


export const setChooseProduct = payload => ({
    type: types.CHOOSED_PRODUCT,
    payload
});

export const removeProduct = payload => ({
    type: types.REMOVE_PRODUCT,
    payload
});


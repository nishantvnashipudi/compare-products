import iniialState from './intialState';
import * as types from '../action-types/index';
import {parseProducts, parseDropDownOptions} from'../parser/index';

function productState (state = iniialState, action) {
    switch(action.type){
        
        case types.GET_PRODUCTS_SUCCESS: {
            const productsParsed = action.payload && action.payload.products ? parseProducts(action.payload.products) : [];
            const products = action.payload && action.payload.products ? action.payload.products : [];
            const chooseProducts = parseDropDownOptions(productsParsed);
            return {...state, products, chooseProducts, productsParsed, compareProducts: [productsParsed[0]]};
        }
        case types.CHOOSED_PRODUCT: {
            const productAdded = state.productsParsed.find(ele => ele.modelId === action.payload);
            const index = state.compareProducts.findIndex(ele => ele.modelId === productAdded.modelId);
            let compareProducts = [];
            if(index === -1){
                compareProducts = [...state.compareProducts, productAdded];
            } else {
                compareProducts = state.compareProducts;
            }
            
            return {...state, choosedProduct: action.payload, compareProducts}
        } 
        case types.REMOVE_PRODUCT: {
        const modelId = action.payload;
        const compareProducts = state.compareProducts.filter(ele => ele.modelId !== modelId);    
        return {...state, compareProducts}
        }

         // case types.GET_PRODUCTS_SUCCESS: {
        //     const productsParsed = action.payload && action.payload.products ? parseProducts(action.payload.products) : [];
        //     const products = action.payload && action.payload.products ? action.payload.products : [];
        //     const chooseProducts = parseDropDownOptions(productsParsed);
        //     const compareProductsKeys = getModelIds(chooseProducts);
        //     return {...state, products, chooseProducts, productsParsed, compareProductsKeys};
        // }
        // case types.CHOOSED_PRODUCT: {
        //     const keys = state.chooseProducts.find(ele => ele.modelId === action.payload);
        //     debugger
        //     let compareProductsKeys = state.compareProductsKeys;
        //     compareProductsKeys[keys.modelId] = true;
        //     return {...state, choosedProduct: action.payload, compareProductsKeys}
        // }  
    default: return {...state};
    }
}
export default productState;
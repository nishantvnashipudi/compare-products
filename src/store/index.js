import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../action-types/index';
import urlConst from '../constants/url-constants';
import {getService} from '../services/index';

// eslint-disable-next-line require-yield
function* getProducts(){
 const response = yield call(getService, urlConst.products);
 if(response.status === 200 && response.data){
     yield put({type: types.GET_PRODUCTS_SUCCESS, payload: response.data});
 } else {
    yield put({type: types.GET_PRODUCTS_SUCCESS, payload: []});
 }
}

export default function* () {
    yield takeEvery(types.GET_PRODUCTS, getProducts);
}
 import {

   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS,
   LOAD_PHOTOS_ERROR,
   LOAD_SINGLE,
   LOAD_SINGLE_SUCCESS,
   LOAD_SINGLE_ERROR,
   CACHED_SINGLE,
   //USERNAME,
 } from '../constants';

 const initialState = {
   loading: false,
   error: false,
   photos: false,
   singleLoading: false,
   singleError: false,
   single: false,
   cached_single:false,
  // username:false,
 };

 const homeReducer = (state = initialState, action) => {
  switch (action.type) {
  // case USERNAME:
  // return Object.assign({}, state,
  //   {
  //     username: action.username,
  //   })
  case LOAD_PHOTOS:
  return Object.assign({}, state,
    {
      loading: true,
      error: false,
      photos: false,
    })

  case LOAD_PHOTOS_SUCCESS:
  return Object.assign({}, state,
  {
    loading: false,
    photos: action.photos,
    error: false,
  })

  case LOAD_PHOTOS_ERROR:
  return Object.assign({}, state,
  {
    loading: false,
    error: action.error,
  })

  case LOAD_SINGLE:
  return Object.assign({}, state,
  {
    singleLoading: true,
    singleError: false,
    single: false,
  })

  case CACHED_SINGLE:
  return Object.assign({}, state,
  {
    cached_single: action.cached_single,
  })

  case LOAD_SINGLE_SUCCESS:{
  const _single = Object.assign({}, action.single, {
    cached : state.cached_single,
  });

  return Object.assign({}, state,
  {
    singleLoading: false,
    singleError: false,
    single: _single,
    //cached_single: false,
  })
  }
  case LOAD_SINGLE_ERROR:
  return Object.assign({}, state,
  {
    loading: false,
    error: action.singleError,
  })

  default:
  return state
  }
}

 export default homeReducer;

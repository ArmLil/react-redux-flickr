import {
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_ERROR,
  LOAD_SINGLE,
  LOAD_SINGLE_SUCCESS,
  LOAD_SINGLE_ERROR,
  CACHED_SINGLE,
  //USERNAME,

} from '../constants';

// export function setUsername(username) {
//   return {
//     type: USERNAME,
//     username,
//   };
// }

export function cachingSingle(cached_single) {
  return {
    type: CACHED_SINGLE,
    cached_single,
  };
}

export function loadPhotos() {
  return {
    type: LOAD_PHOTOS,
  };
}

export function photosLoaded(photos) {
  return {
    type: LOAD_PHOTOS_SUCCESS,
    photos,
  };
}

export function photoLoadingError(error) {
  return {
    type: LOAD_PHOTOS_ERROR,
    error,
  };
}

export function loadSingle() {
  return {
    type: LOAD_SINGLE,
  };
}

export function singleLoaded(single) {
  return {
    type: LOAD_SINGLE_SUCCESS,
    single,
  };
}

export function singleLoadingError(singleError) {
  return {
    type: LOAD_SINGLE_ERROR,
    singleError,
  };
}

import request from '../../utils/request'
import { singleLoadingError, singleLoaded } from '../../actions'

export function searchSinglePhoto(username, photo_id) {
  const FLICKR_ROOT = 'https://api.flickr.com/services/rest/?'
  const FLICKR_METHOD_PHOTOS_GET_INFO = 'flickr.photos.getInfo'
  //const requestURL = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=035845d8f12006199c3942da46accecc&photo_id=${username}&format=json&nojsoncallback=1`;

  let uri = `${FLICKR_ROOT}`
    uri += `method=${FLICKR_METHOD_PHOTOS_GET_INFO}`
    uri += `&api_key=${username}`
    uri += `&photo_id=${photo_id}`
    uri += '&format=json&nojsoncallback=1'
  //console.log('single uri', uri)

  return function (dispatch) {
    //console.log('dispatch')
    return request(uri).then(
      result => {
        //console.log('...result.....', result)
        if (result.stat === 'fail') dispatch(singleLoadingError(result.message));
        else dispatch(singleLoaded(result));
      }
    )
  }
}

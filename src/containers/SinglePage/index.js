import React from 'react';
import { searchSinglePhoto } from './searchSinglePhoto'
//import store from '../../store'
import { loadSingle } from '../../actions'
import { connect } from 'react-redux'
import List from '../../components/List';
import LoadingIndicator from '../../components/LoadingIndicator'
import CenteredSection from '../../styling-components/CenteredSection'
//import { fetchPhotos } from '../HomePage/searchPhotos'
//import Img from '../../styling-components/Img'
import A from '../../styling-components/A';


  export class SinglePage extends React.Component {
    componentDidMount(){
      const { username, photo_id } = this.props.params;
      this.props.onLoading(username, photo_id);
    }
    render() {
      const { singleLoading, singleError, single } = this.props;
      if (singleLoading) {
        return <List component={LoadingIndicator} />;
      }
      if (singleError) {
        return  (
          <CenteredSection>
              <ul>
                {singleError}
                <p>{'...Please, try again!'}</p>
              </ul>
            </CenteredSection>
          )
      }
      if (single) {
      console.log('if single => ', single)

      //console.log('if single => ', single.photo.urls.url[0]._content)
      const url = single.photo.urls.url[0]._content;
       return (
            <CenteredSection style = {{diplay:'flex', overflow:'hidden'}}>
              <h4> Title  {single.photo.title._content} </h4>
              <p> photo id - {single.photo.id} </p>
              <p> photo owner - {single.photo.owner.realname} </p>
              <p> owner username - {single.photo.owner.username} </p>
              <p style={{padding:'1em'}}> ...{single.photo.description._content} </p>
              <A href={url}> url = {url} </A>
            </CenteredSection>
        );
      }
      return <CenteredSection/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
     single: state.single,
     singleLoading: state.singleLoading,
     singleError: state.singleError,
     cached_single:state.cached_single,
     username:ownProps.params.username,
     url_o:ownProps.params.url_o,
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoading: (username, photo_id) => {
      dispatch(loadSingle());
      dispatch(searchSinglePhoto(username, photo_id));
    },
  };
}

export default connect( mapStateToProps, mapDispatchToProps)(SinglePage);


// <h4> Title  {single.photo.title._content} </h4>
// <p> photo id - {single.photo.id} </p>
// <p> photo owner - {single.photo.owner.realname} </p>
// <p> owner username - {single.photo.owner.username} </p>
// <p style={{padding:'1em'}}> ...{single.photo.description._content} </p>
// <A href={url}> url = {url} </A>

//{single.contentId}

//
// <Img
//   src={url_o}
//   style={{width:'100%', margin:'0.5em'}}
//   alt="flickr-Logo" />

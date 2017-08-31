import React from 'react';
import { Link } from 'react-router';
import List from '../../components/List';
import LoadingIndicator from '../../components/LoadingIndicator';
import { cachingSingle } from '../../actions'
//import store from '../../store'
import { connect } from 'react-redux'
import Grid from '../../styling-components/Grid'
import { fetchPhotos } from './searchPhotos'
import { loadPhotos } from '../../actions'
import Item from '../../components/Item'
import HomePage from '../../containers/HomePage'


export class Photos extends React.Component {

  componentDidMount(){
    const {username,term,limit} = this.props
    this.props.onPhotoPageLoad(username,term,limit);
  }
  clickFunction = (photo) => {
    this.props.clickHandler(photo);
  }
  render() {
    console.log('...render... Photos')
    const { loading, error, photos, username } = this.props;
     if(!username) {
       return null }
     if (loading) {
       return <List component={LoadingIndicator} /> }
     if (error) {
       return  <div style = {{border: '1px solid blue'}}>
                 <ul>
                   {error} <p>{'...Please, try again!'}</p>
                 </ul>
               </div>
     }
     if (photos) {
      return (
        <div style={{display:'flex', height: '40em'}}>
            <HomePage></HomePage>
         <Grid style={{overflow:'scroll'}}>
             {
               photos.map((photo) => {
                 const photo_id=photo.id;
                 return (
                   <div key={photo.id}>
                       <Link
                        style={{textDecoration: 'none'}}
                        onClick = {() => this.clickFunction(photo)}
                        to={`/${username}/${photo_id}`}>
                        <Item photo={photo} />
                       </Link>
                   </div>
                 )})
              }
           </Grid>
        </div>
       );
     }
     return <div></div>;
   }
};

export function mapDispatchToProps(dispatch) {
 console.log('mapDispatchToProps')
 return {
   clickHandler:(photo) => dispatch(cachingSingle(photo)),
   onPhotoPageLoad:(username,term,limit) => {
    dispatch(loadPhotos());
    dispatch(fetchPhotos(username,term,limit))
  }
 };
}

const mapStateToProps = (state,ownProps) => {
console.log('mapStateToProps')
 return {
  loading: state.loading,
  error:state.error,
  photos:state.photos,
  username:ownProps.params.username,
  term:ownProps.params.term,
  limit:ownProps.params.limit,
 }
};

export default connect( mapStateToProps, mapDispatchToProps)(Photos);

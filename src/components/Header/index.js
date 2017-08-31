import React from 'react';

import A from '../../styling-components/A';
import Img from '../../styling-components/Img';
import NavBar from '../../styling-components/NavBar';
import HeaderLink from '../../styling-components/HeaderLink';
import FlickrBanner from './TwitterFlickrFDG.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <div>
      <div >
        <NavBar>
        <A href="https://twitter.com/Flickr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <Img src={FlickrBanner} alt="flickr-Logo" />
        </A>
        <div>
          <HeaderLink to="/">
            <h4>  {messages.home.text} </h4>
          </HeaderLink>
          <HeaderLink to="/services">
            <h4> {messages.services.text}</h4>
          </HeaderLink>
        </div>
        </NavBar>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export default Header;

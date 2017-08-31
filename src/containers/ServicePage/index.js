import React from 'react';
import messages from './messages';
import Iframe from '../../styling-components//Iframe';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h3>
          {messages.header.text}
        </h3>
        <Iframe src="https://mashupguide.net/1.0/html/ch06.xhtml" />
      </div>
    );
  }
}

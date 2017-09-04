import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 2em;
  text-decoration: none;
  border-radius: 7px;
  height: 1em;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 15px;
  border: 1.5px solid #41ADDD;
  color: #41ADDD;
  text-shadow: -5px -5px 2px hsla(337, 33%, 68%, 0.20),
               -3px -3px 2px hsla(337, 33%, 68%, 0.20),
               -1px -1px 2px hsla(337, 33%, 68%, 0.20);
  &:hover {
      -moz-box-shadow: 0 0 20px #41ADDD;
      -webkit-box-shadow: 0 0 20px #41ADDD;
       box-shadow: 5px 5px 20px #41ADDD;
 }
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;

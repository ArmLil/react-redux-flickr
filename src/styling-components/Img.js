import styled from 'styled-components';

const Img = styled.img`
  width: 10em;
  height: 7em;
  margin: 0 auto;
  padding:0.3em;

  &:hover {
      -moz-box-shadow: 0 0 20px #41ADDD;
      -webkit-box-shadow: 0 0 20px #41ADDD;
       box-shadow: 5px 5px 20px #41ADDD;
 }
`;

export default Img;

import styled from 'styled-components';

export default styled.div`
  border: 1px solid #41ADDD;
  margin 0;
  padding: 2px;
  padding-left: 20px;
  height : auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 1px 1px 5px #000000;
  @media all and (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

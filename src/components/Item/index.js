import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  cursor:pointer;
  margin: 10px;
  width: 190px;
  height: 230px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeadDiv = styled.div`
  display: flex;
  margin: 0;
  height: 190px;
  background-position: center;
  background-size: cover;
  align-items: flex-end;
  padding: 5px;
`;

const Descript = styled.div`
  margin: 0;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 70px;
  width:120px;
`;

const Mark = styled.h5`
  margin: 0;
  display: flex;
  color: hsl(235, 10%, 33%);
  font-size: 11px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 17px;
  background-color: hsla(328, 83%, 96%, 0.50);
  border-radius: 5px;
`;

const H5 = styled.h5`
   margin: 0;
   display: flex;
   color: white;
   width: 110px;
   height: 35px;
`;

const Name = styled.h5`
  margin: 0;
  padding:0.3em;
  font-size: 12px;
  align-items: center;
  flex-wrap: no-wrap;
  color: hsl(235, 10%, 33%);
  background-color: hsl(55, 0%, 97%)
`;


const Item = (item) =>{
  //console.log('in item, photo',item, `url(${item.photo.url_s})`,item.photo.datetaken)
  return(
    <ItemContainer>
      <Name>{item.photo.title}</Name>
      <HeadDiv style={{backgroundImage: `url(${item.photo.url_s})`}}>
      <Descript>
        <Mark>Flickr</Mark>
        <H5>{item.photo.datetaken}</H5>
      </Descript>
      </HeadDiv>
      <Name>owner '{item.photo.ownername}'</Name>
    </ItemContainer>
  )
}

export default Item;

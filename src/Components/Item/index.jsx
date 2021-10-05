import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-weight: bold;
  }
`

export default ({ type, from, value }) => {
  return (
    <Item>
      <span>{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  )
}
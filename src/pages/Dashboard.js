import React from 'react';
import styled from 'styled-components/macro'
import {RowOfCounters} from "../molecules/RowOfCounters"
import {Title} from "../atoms/Title"

const Wrapper = styled.body `
background-color: #b4b1b16b;
margin: none;
padding: 8px;
`

export const  Dashboard = () => {
  return (
      <Wrapper>
        <Title/>
        <RowOfCounters/>
      </Wrapper>
  )
}


import React from 'react';
import styled from 'styled-components/macro'
import {RowOfCounters} from "../molecules/RowOfCounters"
import {Title} from "../atoms/Title"

const Wrapper = styled.body `
background-color: #F0F1EA;
margin: none;
padding: 8px;
`
const Heading = styled.div`
padding: 16px 0 4px 16px;
font-size: 22px;
font-weight:bold;
`

export const  Dashboard = () => {
  return (
      <Wrapper>
        <Title/>
        <Heading>Cases in the world</Heading>
        <RowOfCounters/>
        <Heading>Cases in the United States</Heading>

        <RowOfCounters/>

      </Wrapper>
  )
}


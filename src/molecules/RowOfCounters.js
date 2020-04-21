import React from 'react';
import styled from 'styled-components/macro'
import {CounterBox} from '../atoms/CounterBox'

const Wrapper = styled.div `
  display: flex;
  justify-content: space-around;
`

export const  RowOfCounters = () => {
  return (
      <Wrapper>
          <CounterBox label="Confirmed" bgColor={"#52858D"}/>
          <CounterBox label="Recovered" bgColor={"#48A3AD"}/>
          <CounterBox label="Deaths" bgColor={"#A93D43"}/>
          <CounterBox label="Fatality Rate" bgColor={"#4E6B6F"}/>
      </Wrapper>
  )
}


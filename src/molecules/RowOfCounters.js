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
          <CounterBox label="Confirmed" bgColor={"#006989"}/>
          <CounterBox label="Recovered" bgColor={"#4A5259"}/>
          <CounterBox label="Deaths" bgColor={"#9A3322"}/>
          <CounterBox label="Fatality Rate" bgColor={"#8D9394"}/>
      </Wrapper>
  )
}


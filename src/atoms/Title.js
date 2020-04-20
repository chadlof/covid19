import React from 'react';
import styled from 'styled-components/macro'

const Wrapper = styled.h1 `
text-align:center;
color: crimson;
margin:0;
padding:14px;
font-size: 28px;
`
export const  Title = () => {
    const now = new Date.getYear()
    console.log({now})
  return (
      <Wrapper>
          COVID-19 Tracker {now}
      </Wrapper>
  )
}
import React from 'react';
import styled from 'styled-components/macro'

const Wrapper = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 20%;
    height:76px;
    background-color: ${props => props.bgColor ? props.bgColor : '#FFF'};
    border: ${props => props.bgColor ? props.bgColor : 'darkgray'} 3px ridge;
    border-radius: 14px;


`
const Counter = styled.div`
    display: flex;
    color: #FFF;
    font-size:28px;
`
const Label = styled.div `
    display: flex;
    color: #FFF;
    font-size:20px;
`

export const  CounterBox = (props) => {
    const { bgColor, label } = props
  return (
      <Wrapper bgColor={bgColor}>
        <Label>{label}</Label>
        <Counter>123456789</Counter>
      </Wrapper>
  )
}


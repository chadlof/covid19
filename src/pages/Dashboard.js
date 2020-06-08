import React from 'react';
import styled from 'styled-components/macro'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
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
const GET_US_DATA  = gql`
{
  # time series data
results (countries: ["US", "Canada"]) {
  country {
    name
  }
  date
  confirmed
  deaths
  recovered
  growthRate
}

# by country
country(name: "US") {
  name
  mostRecent {
    date(format: "yyyy-MM-dd")
    confirmed
  }
}
}`

export const  Dashboard = () => {
  const { loading, error, data } = useQuery(GET_US_DATA);
  const isAvaliable = data && data.country && data.results
  if (isAvaliable) {
    const mostRecent = data.country.mostRecent
    const resultsArray = data.results
    const todaysResults = resultsArray.filter(result => result.date === mostRecent.date)
    
    console.log({mostRecent})
    console.log({resultsArray})
    console.log({todaysResults})
}



  return (
      <Wrapper>
        <Title/>
        <Heading>Cases in the United States</Heading>
        <RowOfCounters/>

      </Wrapper>
  )
}


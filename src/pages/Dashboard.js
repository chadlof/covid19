import React from 'react';
import styled from 'styled-components/macro'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { HttpLink } from "apollo-link-http";


import {RowOfCounters} from "../molecules/RowOfCounters"
import {Title} from "../atoms/Title"
import gql from 'graphql-tag';


// // setup your `RestLink` with your endpoint
// const restLink = new RestLink({ uri: "https://covidtracking.com/api/v1/states/current.json",
//                                 headers: {
//                                   'Content-Type': 'application/json',
//                                   'Access-Control-Allow-Origin': '*',
//                                 },
//                                 method: 'GET'
//                               });

// // setup your client
// const client = new ApolloClient({
//   link: restLink,
//   cache: new InMemoryCache(),
// });

// const Query = gql`
//   query states {
//     state @rest {
//       state
//       positive
//     }
//   }
// `

// client.query({ Query }).then(response => {
//   console.log(response.data.name);
// }).catch(error => {
//   this.error = error;
//   alert("E " + error);
// });;



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

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://covid19-graphql.now.sh',
});


const usClient = new ApolloClient({
  cache,
  link
})

usClient
  .query({
    query: gql`
    {
    # time series data
  results (countries: ["US", "Canada"], date: { lt: "4/21/2020" }) {
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
}
    `
  })
  .then(result => console.log(result));

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


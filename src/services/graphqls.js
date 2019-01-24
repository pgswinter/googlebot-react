import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const API_ROOT = 'http://5c393250b9bfb20014f71477.mockapi.io';

const httpLink = createHttpLink({
    uri: API_ROOT
})
  
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})
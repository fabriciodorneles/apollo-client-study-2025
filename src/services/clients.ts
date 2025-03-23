//services/clients.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const LocationsClient = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache()
})

export const DogsClient = new ApolloClient({
  uri: "https://71z1g-4000.csb.app/",
  cache: new InMemoryCache()
})
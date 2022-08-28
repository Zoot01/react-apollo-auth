import { HttpLink, ApolloClient, from, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:4444/api/v1/graphql",
  credentials: "include",
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([httpLink]),
});

export default apolloClient;

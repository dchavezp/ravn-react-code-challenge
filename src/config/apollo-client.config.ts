import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://syn-api-prod.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNTZmMTAxOWVjYWQyIiwicHJvamVjdElkIjoiMjkzOTZhNjItYjI2ZC00MTNiLTg4OTItOGI5OGMxODkyMWJhIiwiZnVsbE5hbWUiOiJEZXdpdHQgU2NvdHQgQ2hhdmV6IFBvbmNlIiwiZW1haWwiOiJkY2hhdmV6cEB1bnNhLmVkdS5wZSIsImlhdCI6MTY3ODQyOTY0N30.W9MTWGeNOGoDos4jSuqvIdrjOlu426Uv1F-D_CnP0cE";
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;

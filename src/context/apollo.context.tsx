import { ApolloProvider as ApolloProviderClient } from "@apollo/client";
import client from "@/config/apollo-client.config";
import { ComponentWithChildren } from "@/types";

function ApolloProvider({ children }: ComponentWithChildren) {
  return (
    <ApolloProviderClient client={client}>{children}</ApolloProviderClient>
  );
}
export default ApolloProvider;

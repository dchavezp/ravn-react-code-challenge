import { DocumentNode, OperationVariables, QueryHookOptions, useQuery } from "@apollo/client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useApolloQuery<TData = any, TVariables extends OperationVariables = any>(query: DocumentNode, options: QueryHookOptions<TData, TVariables>) {
    const { loading, error, data } = useQuery<TData, TVariables>(query, options);
    return {
        loading, error, data
    }
}
export default useApolloQuery
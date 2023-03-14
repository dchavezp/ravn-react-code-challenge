import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query User{
    users{
       avatar
       email
       fullName
       id
    }
  }
`;
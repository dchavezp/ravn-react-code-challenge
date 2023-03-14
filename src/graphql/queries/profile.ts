import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query User{
    profile{
        avatar
        email
        fullName
        type
        createdAt
        updatedAt
    }
  }
`
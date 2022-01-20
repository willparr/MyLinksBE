import { gql } from 'apollo-server';

export const userSchema = gql`
  type Query {
    user(user: String!): User
  }

  type Link {
    title: String!
    link: String!
  }

  type User {
    _id: String!
    user: String!
    links: [Link!]!
  }
`;

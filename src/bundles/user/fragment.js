import { gql } from 'apollo-boost';

export const UserDataFragment = gql`
    fragment UserData on User {
      id
      name
      email
      designation
      status
      admin
      super_admin
      token
      errors {
        key
        value
      }
    }
  `;

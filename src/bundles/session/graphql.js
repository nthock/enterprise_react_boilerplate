import { gql } from 'apollo-boost';

export const authenticateUser = gql`
  mutation authenticateUser($email: String, $password: String) {
    authenticate(input: { email: $email, password: $password }) {
      email
      name
      token
      admin
      super_admin
      errors {
        key
        value
      }
    }
  }
 `;

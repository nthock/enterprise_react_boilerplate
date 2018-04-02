import { gql } from 'apollo-boost';

export const verifyTokenQuery = gql`
  query verifyToken($token: String) {
    verifyToken(token: $token) {
      id
      name
      admin
      super_admin
      errors {
        key
        value
      }
    }
  }
`;

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

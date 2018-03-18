import { gql } from 'apollo-boost';

export const createUserMutation = gql`
  mutation createUser($name: String, $email: String, $password: String, $password_confirmation: String) {
    create_user(input: { name: $name, email: $email, password: $password, password_confirmation: $password_confirmation }) {
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

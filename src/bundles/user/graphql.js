import { gql } from 'apollo-boost';

export const createUserMutation = gql`
  mutation createUser($name: String, $email: String, $password: String, $password_confirmation: String) {
    create_user(input: { name: $name, email: $email, password: $password, password_confirmation: $password_confirmation }) {
      email
      name
      token
      admin
      super_admin
      token
      errors {
        key
        value
      }
    }
  }
`;

export const acceptInviteMutation = gql`
  mutation acceptInvite($invitation_token: String, $password: String, $password_confirmation: String) {
    acceptInvite(input: { invitation_token: $invitation_token, password: $password, password_confirmation: $password_confirmation }) {
      id
      name
      email
      designation
      admin
      super_admin
      token
      errors {
        key
        value
      }
    }
  }
`;

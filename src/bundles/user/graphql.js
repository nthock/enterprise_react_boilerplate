import { gql } from 'apollo-boost';
import { UserDataFragment } from './fragment.js';

export const createUserMutation = gql`
  mutation createUser($name: String, $email: String, $password: String, $password_confirmation: String) {
    create_user(input: { name: $name, email: $email, password: $password, password_confirmation: $password_confirmation }) {
      ...UserData
    }
  }
  ${UserDataFragment}
`;

export const acceptInviteMutation = gql`
  mutation acceptInvite($invitation_token: String, $password: String, $password_confirmation: String) {
    acceptInvite(input: { invitation_token: $invitation_token, password: $password, password_confirmation: $password_confirmation }) {
      ...UserData
    }
  }
  ${UserDataFragment}
`;

export const forgotPasswordMutation = gql`
  mutation forgetPassword($email: String) {
    forgetPassword(input: { email: $email }) {
      id
      errors {
        key
        value
      }
    }
  }
`;

export const resetForgotPassword = gql`
  mutation resetForgotPassword($reset_password_token: String, $password: String, $password_confirmation: String) {
    resetForgotPassword(input: { reset_password_token: $reset_password_token, password: $password, password_confirmation: $password_confirmation }) {
      ...UserData
    }
  }
  ${UserDataFragment}
`;

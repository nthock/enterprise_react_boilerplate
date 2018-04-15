import { gql } from "apollo-boost";

export const AdminDataFragment = gql`
  fragment AdminData on User {
    id
    name
    email
    designation
    status
    admin
    super_admin
  }
`;

import { gql } from '@apollo/client';

export default gql`
mutation CreateMemberData($fullName: String!, $usrName: String!, $email: String!, $phone: String!, $password: String!) {
  createMemberData(fullName: $fullName, usrName: $usrName, email: $email, phone: $phone, password: $password) {
    _id
    email
    usrUniqueId
  }
}
`
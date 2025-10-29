import { gql } from '@apollo/client';

export default gql`

query GetMemberDataUsrIdEncrypt($email: String!, $password: String!) {
  getMemberDataUsrIdEncrypt(email: $email, password: $password) {
    usrUniqueId
  }
}

`
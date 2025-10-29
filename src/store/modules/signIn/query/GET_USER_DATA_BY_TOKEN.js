import { gql } from '@apollo/client';
  
  export default gql`
    query GetTokenUserData($usrUniqueId: String!) {
        getTokenUserData(usrUniqueId: $usrUniqueId) {
        _id
        email
        fullName
        phone
        usrName
        usrType
        }
    }
  `
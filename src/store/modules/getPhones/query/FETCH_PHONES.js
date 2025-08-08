import { gql } from '@apollo/client';

export default gql`

query getPhoneData($keyword: String!) {
  getPhoneData(keyword: $keyword) {
    id
    name
  }
}
`
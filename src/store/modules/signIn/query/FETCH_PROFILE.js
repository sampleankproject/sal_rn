import { gql } from '@apollo/client';

export default gql`

query getPostByIds($postId: ID!){
  postById(id: $postId) {
    content
    title
    id
  }
}
`
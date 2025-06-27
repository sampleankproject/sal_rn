import { gql } from '@apollo/client';

export default gql`
mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }`
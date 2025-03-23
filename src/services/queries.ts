import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
`
export const GET_DOGS = gql`
    query GetDogs {
      dogs {
        id
        breed
      }
    }
`

export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

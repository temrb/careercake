/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrackBoard = /* GraphQL */ `
  query GetTrackBoard($id: ID!) {
    getTrackBoard(id: $id) {
      id
      card {
        items {
          id
          job
          company
          link
          category
          date
          createdAt
          updatedAt
          trackBoardCardId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTrackBoards = /* GraphQL */ `
  query ListTrackBoards(
    $filter: ModelTrackBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrackBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        card {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      job
      company
      link
      category
      date
      mutationStamp {
        items {
          id
          stamp
          createdAt
          updatedAt
          cardMutationStampId
          owner
        }
        nextToken
      }
      trackBoard {
        id
        card {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      trackBoardCardId
      owner
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        job
        company
        link
        category
        date
        mutationStamp {
          nextToken
        }
        trackBoard {
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        trackBoardCardId
        owner
      }
      nextToken
    }
  }
`;
export const getMutatedStamp = /* GraphQL */ `
  query GetMutatedStamp($id: ID!) {
    getMutatedStamp(id: $id) {
      id
      stamp
      card {
        id
        job
        company
        link
        category
        date
        mutationStamp {
          nextToken
        }
        trackBoard {
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        trackBoardCardId
        owner
      }
      createdAt
      updatedAt
      cardMutationStampId
      owner
    }
  }
`;
export const listMutatedStamps = /* GraphQL */ `
  query ListMutatedStamps(
    $filter: ModelMutatedStampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMutatedStamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stamp
        card {
          id
          job
          company
          link
          category
          date
          createdAt
          updatedAt
          trackBoardCardId
          owner
        }
        createdAt
        updatedAt
        cardMutationStampId
        owner
      }
      nextToken
    }
  }
`;

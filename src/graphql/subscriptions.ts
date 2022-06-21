/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack($owner: String) {
    onCreateTrack(owner: $owner) {
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
          trackCardId
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
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack($owner: String) {
    onUpdateTrack(owner: $owner) {
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
          trackCardId
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
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack($owner: String) {
    onDeleteTrack(owner: $owner) {
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
          trackCardId
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($owner: String) {
    onCreateCard(owner: $owner) {
      id
      job
      company
      link
      category
      date
      createdAt
      updatedAt
      trackCardId
      owner
    }
  }
`;
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($owner: String) {
    onUpdateCard(owner: $owner) {
      id
      job
      company
      link
      category
      date
      createdAt
      updatedAt
      trackCardId
      owner
    }
  }
`;
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($owner: String) {
    onDeleteCard(owner: $owner) {
      id
      job
      company
      link
      category
      date
      createdAt
      updatedAt
      trackCardId
      owner
    }
  }
`;

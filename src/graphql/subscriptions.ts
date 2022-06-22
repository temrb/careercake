/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrackBoard = /* GraphQL */ `
  subscription OnCreateTrackBoard($owner: String) {
    onCreateTrackBoard(owner: $owner) {
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
export const onUpdateTrackBoard = /* GraphQL */ `
  subscription OnUpdateTrackBoard($owner: String) {
    onUpdateTrackBoard(owner: $owner) {
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
export const onDeleteTrackBoard = /* GraphQL */ `
  subscription OnDeleteTrackBoard($owner: String) {
    onDeleteTrackBoard(owner: $owner) {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($owner: String) {
    onCreateCard(owner: $owner) {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($owner: String) {
    onUpdateCard(owner: $owner) {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($owner: String) {
    onDeleteCard(owner: $owner) {
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
export const onCreateMutatedStamp = /* GraphQL */ `
  subscription OnCreateMutatedStamp($owner: String) {
    onCreateMutatedStamp(owner: $owner) {
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
export const onUpdateMutatedStamp = /* GraphQL */ `
  subscription OnUpdateMutatedStamp($owner: String) {
    onUpdateMutatedStamp(owner: $owner) {
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
export const onDeleteMutatedStamp = /* GraphQL */ `
  subscription OnDeleteMutatedStamp($owner: String) {
    onDeleteMutatedStamp(owner: $owner) {
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

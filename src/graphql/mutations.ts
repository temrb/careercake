/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrackBoard = /* GraphQL */ `
  mutation CreateTrackBoard(
    $input: CreateTrackBoardInput!
    $condition: ModelTrackBoardConditionInput
  ) {
    createTrackBoard(input: $input, condition: $condition) {
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
export const updateTrackBoard = /* GraphQL */ `
  mutation UpdateTrackBoard(
    $input: UpdateTrackBoardInput!
    $condition: ModelTrackBoardConditionInput
  ) {
    updateTrackBoard(input: $input, condition: $condition) {
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
export const deleteTrackBoard = /* GraphQL */ `
  mutation DeleteTrackBoard(
    $input: DeleteTrackBoardInput!
    $condition: ModelTrackBoardConditionInput
  ) {
    deleteTrackBoard(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
export const createMutatedStamp = /* GraphQL */ `
  mutation CreateMutatedStamp(
    $input: CreateMutatedStampInput!
    $condition: ModelMutatedStampConditionInput
  ) {
    createMutatedStamp(input: $input, condition: $condition) {
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
export const updateMutatedStamp = /* GraphQL */ `
  mutation UpdateMutatedStamp(
    $input: UpdateMutatedStampInput!
    $condition: ModelMutatedStampConditionInput
  ) {
    updateMutatedStamp(input: $input, condition: $condition) {
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
export const deleteMutatedStamp = /* GraphQL */ `
  mutation DeleteMutatedStamp(
    $input: DeleteMutatedStampInput!
    $condition: ModelMutatedStampConditionInput
  ) {
    deleteMutatedStamp(input: $input, condition: $condition) {
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

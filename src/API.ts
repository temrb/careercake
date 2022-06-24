/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTrackBoardInput = {
  id?: string | null,
};

export type ModelTrackBoardConditionInput = {
  and?: Array< ModelTrackBoardConditionInput | null > | null,
  or?: Array< ModelTrackBoardConditionInput | null > | null,
  not?: ModelTrackBoardConditionInput | null,
};

export type TrackBoard = {
  __typename: "TrackBoard",
  id: string,
  card?: ModelCardConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items:  Array<Card | null >,
  nextToken?: string | null,
};

export type Card = {
  __typename: "Card",
  id: string,
  job: string,
  company: string,
  link?: string | null,
  category: string,
  date: string,
  mutationStamp?: ModelMutatedStampConnection | null,
  trackBoard?: TrackBoard | null,
  createdAt: string,
  updatedAt: string,
  trackBoardCardId?: string | null,
  owner?: string | null,
};

export type ModelMutatedStampConnection = {
  __typename: "ModelMutatedStampConnection",
  items:  Array<MutatedStamp | null >,
  nextToken?: string | null,
};

export type MutatedStamp = {
  __typename: "MutatedStamp",
  id: string,
  stamp: Array< string >,
  card?: Card | null,
  createdAt: string,
  updatedAt: string,
  cardMutationStampId: string,
  owner?: string | null,
};

export type UpdateTrackBoardInput = {
  id: string,
};

export type DeleteTrackBoardInput = {
  id: string,
};

export type CreateCardInput = {
  id?: string | null,
  job: string,
  company: string,
  link?: string | null,
  category: string,
  date: string,
  trackBoardCardId?: string | null,
};

export type ModelCardConditionInput = {
  job?: ModelStringInput | null,
  company?: ModelStringInput | null,
  link?: ModelStringInput | null,
  category?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
  trackBoardCardId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCardInput = {
  id: string,
  job?: string | null,
  company?: string | null,
  link?: string | null,
  category?: string | null,
  date?: string | null,
  trackBoardCardId?: string | null,
};

export type DeleteCardInput = {
  id: string,
};

export type CreateMutatedStampInput = {
  id?: string | null,
  stamp: Array< string >,
  cardMutationStampId: string,
};

export type ModelMutatedStampConditionInput = {
  stamp?: ModelStringInput | null,
  and?: Array< ModelMutatedStampConditionInput | null > | null,
  or?: Array< ModelMutatedStampConditionInput | null > | null,
  not?: ModelMutatedStampConditionInput | null,
  cardMutationStampId?: ModelIDInput | null,
};

export type UpdateMutatedStampInput = {
  id: string,
  stamp?: Array< string > | null,
  cardMutationStampId?: string | null,
};

export type DeleteMutatedStampInput = {
  id: string,
};

export type ModelTrackBoardFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTrackBoardFilterInput | null > | null,
  or?: Array< ModelTrackBoardFilterInput | null > | null,
  not?: ModelTrackBoardFilterInput | null,
};

export type ModelTrackBoardConnection = {
  __typename: "ModelTrackBoardConnection",
  items:  Array<TrackBoard | null >,
  nextToken?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  job?: ModelStringInput | null,
  company?: ModelStringInput | null,
  link?: ModelStringInput | null,
  category?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
  trackBoardCardId?: ModelIDInput | null,
};

export type ModelMutatedStampFilterInput = {
  id?: ModelIDInput | null,
  stamp?: ModelStringInput | null,
  and?: Array< ModelMutatedStampFilterInput | null > | null,
  or?: Array< ModelMutatedStampFilterInput | null > | null,
  not?: ModelMutatedStampFilterInput | null,
  cardMutationStampId?: ModelIDInput | null,
};

export type CreateTrackBoardMutationVariables = {
  input: CreateTrackBoardInput,
  condition?: ModelTrackBoardConditionInput | null,
};

export type CreateTrackBoardMutation = {
  createTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTrackBoardMutationVariables = {
  input: UpdateTrackBoardInput,
  condition?: ModelTrackBoardConditionInput | null,
};

export type UpdateTrackBoardMutation = {
  updateTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTrackBoardMutationVariables = {
  input: DeleteTrackBoardInput,
  condition?: ModelTrackBoardConditionInput | null,
};

export type DeleteTrackBoardMutation = {
  deleteTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateMutatedStampMutationVariables = {
  input: CreateMutatedStampInput,
  condition?: ModelMutatedStampConditionInput | null,
};

export type CreateMutatedStampMutation = {
  createMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

export type UpdateMutatedStampMutationVariables = {
  input: UpdateMutatedStampInput,
  condition?: ModelMutatedStampConditionInput | null,
};

export type UpdateMutatedStampMutation = {
  updateMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

export type DeleteMutatedStampMutationVariables = {
  input: DeleteMutatedStampInput,
  condition?: ModelMutatedStampConditionInput | null,
};

export type DeleteMutatedStampMutation = {
  deleteMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

export type GetTrackBoardQueryVariables = {
  id: string,
};

export type GetTrackBoardQuery = {
  getTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTrackBoardsQueryVariables = {
  filter?: ModelTrackBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrackBoardsQuery = {
  listTrackBoards?:  {
    __typename: "ModelTrackBoardConnection",
    items:  Array< {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMutatedStampQueryVariables = {
  id: string,
};

export type GetMutatedStampQuery = {
  getMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

export type ListMutatedStampsQueryVariables = {
  filter?: ModelMutatedStampFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMutatedStampsQuery = {
  listMutatedStamps?:  {
    __typename: "ModelMutatedStampConnection",
    items:  Array< {
      __typename: "MutatedStamp",
      id: string,
      stamp: Array< string >,
      card?:  {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      cardMutationStampId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTrackBoardSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTrackBoardSubscription = {
  onCreateTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTrackBoardSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTrackBoardSubscription = {
  onUpdateTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTrackBoardSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTrackBoardSubscription = {
  onDeleteTrackBoard?:  {
    __typename: "TrackBoard",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: string,
        date: string,
        createdAt: string,
        updatedAt: string,
        trackBoardCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    job: string,
    company: string,
    link?: string | null,
    category: string,
    date: string,
    mutationStamp?:  {
      __typename: "ModelMutatedStampConnection",
      items:  Array< {
        __typename: "MutatedStamp",
        id: string,
        stamp: Array< string >,
        createdAt: string,
        updatedAt: string,
        cardMutationStampId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    trackBoard?:  {
      __typename: "TrackBoard",
      id: string,
      card?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    trackBoardCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateMutatedStampSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateMutatedStampSubscription = {
  onCreateMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMutatedStampSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateMutatedStampSubscription = {
  onUpdateMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMutatedStampSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteMutatedStampSubscription = {
  onDeleteMutatedStamp?:  {
    __typename: "MutatedStamp",
    id: string,
    stamp: Array< string >,
    card?:  {
      __typename: "Card",
      id: string,
      job: string,
      company: string,
      link?: string | null,
      category: string,
      date: string,
      mutationStamp?:  {
        __typename: "ModelMutatedStampConnection",
        nextToken?: string | null,
      } | null,
      trackBoard?:  {
        __typename: "TrackBoard",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      trackBoardCardId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardMutationStampId: string,
    owner?: string | null,
  } | null,
};

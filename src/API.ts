/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTrackInput = {
  id?: string | null,
};

export type ModelTrackConditionInput = {
  and?: Array< ModelTrackConditionInput | null > | null,
  or?: Array< ModelTrackConditionInput | null > | null,
  not?: ModelTrackConditionInput | null,
};

export type Track = {
  __typename: "Track",
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
  category: Array< string >,
  date: Array< string >,
  createdAt: string,
  updatedAt: string,
  trackCardId?: string | null,
  owner?: string | null,
};

export type UpdateTrackInput = {
  id: string,
};

export type DeleteTrackInput = {
  id: string,
};

export type CreateCardInput = {
  id?: string | null,
  job: string,
  company: string,
  link?: string | null,
  category: Array< string >,
  date: Array< string >,
  trackCardId?: string | null,
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
  trackCardId?: ModelIDInput | null,
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
  category?: Array< string > | null,
  date?: Array< string > | null,
  trackCardId?: string | null,
};

export type DeleteCardInput = {
  id: string,
};

export type ModelTrackFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTrackFilterInput | null > | null,
  or?: Array< ModelTrackFilterInput | null > | null,
  not?: ModelTrackFilterInput | null,
};

export type ModelTrackConnection = {
  __typename: "ModelTrackConnection",
  items:  Array<Track | null >,
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
  trackCardId?: ModelIDInput | null,
};

export type CreateTrackMutationVariables = {
  input: CreateTrackInput,
  condition?: ModelTrackConditionInput | null,
};

export type CreateTrackMutation = {
  createTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTrackMutationVariables = {
  input: UpdateTrackInput,
  condition?: ModelTrackConditionInput | null,
};

export type UpdateTrackMutation = {
  updateTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTrackMutationVariables = {
  input: DeleteTrackInput,
  condition?: ModelTrackConditionInput | null,
};

export type DeleteTrackMutation = {
  deleteTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetTrackQueryVariables = {
  id: string,
};

export type GetTrackQuery = {
  getTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTracksQueryVariables = {
  filter?: ModelTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTracksQuery = {
  listTracks?:  {
    __typename: "ModelTrackConnection",
    items:  Array< {
      __typename: "Track",
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
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
      category: Array< string >,
      date: Array< string >,
      createdAt: string,
      updatedAt: string,
      trackCardId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTrackSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTrackSubscription = {
  onCreateTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTrackSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTrackSubscription = {
  onUpdateTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTrackSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTrackSubscription = {
  onDeleteTrack?:  {
    __typename: "Track",
    id: string,
    card?:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        job: string,
        company: string,
        link?: string | null,
        category: Array< string >,
        date: Array< string >,
        createdAt: string,
        updatedAt: string,
        trackCardId?: string | null,
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
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
    category: Array< string >,
    date: Array< string >,
    createdAt: string,
    updatedAt: string,
    trackCardId?: string | null,
    owner?: string | null,
  } | null,
};

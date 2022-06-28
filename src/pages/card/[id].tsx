import React, { ReactElement } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { withSSRContext, API } from 'aws-amplify';
import { listCards, getCard } from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { Card, ListCardsQuery, GetCardQuery } from '../../API';


interface Props {
  card: Card;
}

export default function IndividualCard({ card }: Props): ReactElement {
  console.log('card', card);
  return <div></div>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Call an external API endpoint to get posts.
  const SSR = withSSRContext();

  const cardsQuery = (await SSR.API.graphql({
    query: getCard,
    variables: {
      id: params?.id,
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetCardQuery };

  // By returning { props: { posts } }, the Individual Post component
  // will receive `post` as a prop at build time
  return {
    props: {
      card: cardsQuery.data.getCard as Card,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();

  const response = (await SSR.API.graphql({
    query: listCards,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as {
    data: ListCardsQuery;
    errors: any[];
  };

  // Get the paths we want to pre-render based on posts
  const paths = response.data.listCards!.items.map((card) => ({
    params: { id: card!.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: true };
};

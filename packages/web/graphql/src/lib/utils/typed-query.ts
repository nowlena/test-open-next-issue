import type { QueryGenqlSelection, QueryResult } from '../generated';
import type { Prettify } from '../utils';

import { generateQueryOp } from '../generated';
import { getErrorMessage } from '../utils';

export type QueryError = {
  message: string;
  locations: { line: number; column: number }[];
  path: string[];
  extensions: {
    code?: string;
  };
};

export type QueryResponse<Query extends QueryGenqlSelection> = Prettify<{
  data: QueryResult<Query>;
  errors?: QueryError[];
}>;

export type TypedQueryOpts = {
  next?: NextFetchRequestConfig | undefined;
  cache?: RequestCache;
};

const GRAPHQL_API_URL = 'https://countries.trevorblades.com';

export const typedQuery = async <Query extends QueryGenqlSelection>(
  opts: { query: Query } & TypedQueryOpts,
) => {
  const { query, variables } = generateQueryOp(opts.query);

  try {
    const res = await fetch(GRAPHQL_API_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: opts.next ?? { revalidate: 60 },
      cache: opts.cache ?? undefined,
    });

    if (!res.ok) {
      throw new Error(`${res.statusText}: ${await res.text()}`);
    }

    const { data, errors } = (await res.json()) as QueryResponse<Query>;

    if (errors) {
      console.log('GraphQL - Expected error ', errors);
      const errorMessage = errors.map((e) => e.message).join('\n');
      throw new Error(errorMessage ?? 'Something went wrong');
    }

    return { data };
  } catch (error) {
    console.log('GraphQL - Uncaught error ', error);
    throw new Error(getErrorMessage(error));
  }
};

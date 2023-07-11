import type { TypedQueryOpts } from '../utils';

import { typedQuery } from '../utils';

export type GetUserResponse = Awaited<ReturnType<typeof getCountry>>;

export type GetCountryArgs = {
  code: string;
  next?: TypedQueryOpts['next'];
  cache?: TypedQueryOpts['cache'];
};

export const getCountry = async (args: GetCountryArgs) => {
  const {
    data: { country },
  } = await typedQuery({
    next: args?.next,
    cache: args?.cache,
    query: {
      country: {
        __args: { code: args.code },
        code: true,
        name: true,
        capital: true,
        continent: {
          code: true,
          name: true,
        },
      },
    },
  });

  // so that we can see revalidations in action
  const now = new Date().toISOString();

  return {
    now,
    ...country,
  };
};

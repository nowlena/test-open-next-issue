import type { SSTConfig } from 'sst';

import { Web } from './packages/infra/stacks/src';

const PROFILE: Record<string, string> = {
  staging: 'staging',
  production: 'production',
  default: 'default',
};

export default {
  config: (input) => ({
    name: 'open-next-issue',
    region: 'us-east-1',
    profile: PROFILE[input.stage || 'default'],
  }),
  stacks: (app) => {
    app.stack(Web);
  },
} satisfies SSTConfig;

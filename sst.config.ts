import type { SSTConfig } from 'sst';

import { Web } from './packages/infra/stacks/src';

/**
 * reference the correct " ~/.aws/credentials " profile (use the same AWS account if you'd like for all stages!)
 */
const PROFILE: Record<string, string> = {
  staging: 'staging',
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

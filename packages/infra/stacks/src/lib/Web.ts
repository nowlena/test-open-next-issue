import type { StackContext } from 'sst/constructs';
import { NextjsSite } from 'sst/constructs';

const ROOT_DIR = '../../..';

export function Web({ stack }: StackContext) {
  const web = new NextjsSite(stack, 'web', {
    buildCommand: 'pnpx open-next@latest build',
    path: `${ROOT_DIR}/apps/web`,
    waitForInvalidation: false,
    runtime: 'nodejs18.x',
    warm: 1,
  });

  stack.addOutputs({
    EXTERNAL_WEB_URL: web.url ?? '',
  });

  return web;
}

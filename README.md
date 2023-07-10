# SST Open Next Issue

Trying to create a minimal repo to reproduce the issue.

## The Issue

Locally there is no issue. When deploying via open-next I will almost randomly get "null" returned instead of my NextJS app.

When checking the CloudWatch logs, this is the error I see:

```sh
TypeError: Cannot read properties of null (reading 'useCallback')
    at exports.useCallback (/var/task/node_modules/react/cjs/react.production.min.js:24:52)
    at InsertedHTML (/var/task/apps/web/node_modules/next/dist/server/app-render/app-render.js:861:52)
    at pg (/var/task/apps/web/node_modules/next/dist/compiled/react-dom-experimental/cjs/react-dom-server.edge.production.min.js:118:273)
    at Z (/var/task/apps/web/node_modules/next/dist/compiled/react-dom-experimental/cjs/react-dom-server.edge.production.min.js:125:91)
    at kg (/var/task/apps/web/node_modules/next/dist/compiled/react-dom-experimental/cjs/react-dom-server.edge.production.min.js:134:423)
    at AsyncLocalStorage.run (node:async_hooks:338:14)
    at Timeout._onTimeout (/var/task/apps/web/node_modules/next/dist/compiled/react-dom-experimental/cjs/react-dom-server.edge.production.min.js:151:146)
    at listOnTimeout (node:internal/timers:569:17)
    at process.processTimers (node:internal/timers:512:7)
```

## Development

**note**: no issue will occur in local development

1. Clone the repo
2. Review `sst.config.ts` to ensure the dev and staging profiles align with your `~/.aws/credentials` file
3. Run `pnpm install`
4. Run `pnpm run dev`

## Deploy Staging

**note**: the issue will occur when deployed (aka within staging)

1. Clone the repo
2. Review `sst.config.ts` to ensure the dev and staging profiles align with your `~/.aws/credentials` file
3. Run `pnpm install`
4. Run `pnpm run deploy:staging`

# FEE Pair Programming Interview API

This is the API used in the interview process for FEE candidates.

## Endpoints

https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/answers/{id}

https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/answers

https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/questions/{id}

https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/questions

https://d10pu24hbl.execute-api.us-east-2.amazonaws.com/v1/ping

## Questions/Answers

Questions and Answers are stored in a "text DB" in the file `api/text.db.js`

## Dependencies

There are no production dependencies, everything is dev-dependencies for things like linting, testing, deploying, etc.

## Deploying

This is deployed automatically when an update is pushed to the master branch. Please do not deploy manually.

## Pipeline

This is built by AWS's CodePipeline at https://us-east-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/FEE-Interview-API/view?region=us-east-2

See `buildspec.yml` for the pipeline.

## Testing

Unit tests are written in Jest and are located in the `__tests__`. They can be run in development mode with `yarn test` and enforce the coverages setup in `package.json`. Tests will automatically be created when using the serverless command to create functions, i.e.:

> sls create function -f oneAnswer --handler api/oneAnswer.index

Integration tests can be run against staging with the command `yarn test:int:ci`. These are newman tests so they have the added benefit of working off of `postman_collection.json` which can be opened in Postman.

Both sets of tests are run before every deploy.

## Linting

Uses eslint:standard and prettier

## Git Hooks

Uses Husky and can be found in `package.json`

test

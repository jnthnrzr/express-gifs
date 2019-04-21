# Express Gifs

[![serverless](http://public.serverless.com/badges/v3.svg)](https://0lwpwbj7jb.execute-api.us-east-1.amazonaws.com/dev/api/gifs)

A wrapper around Giphy API to make requests without leaking API Key. Made with `express` and `serverless`, tested with `jest`.

## Purpose

Anyone working with the Giphy API knows that requests have to be made with the API key visible. The workaround is to use Giphy's wrapper but I realized it is easier to keep a standalone service that "acts" like Giphy server but only abstracts away from the API Key requirement. Since the service is hosted with AWS Lambda, it can scale according to the needs of demand. Overall, it was quite fun to fulfill my idea. I got to learn about the wonderful express and serverless integration. All configurations are separate from app logic, making deployment a breeze.

## Secrets

Giphy API provides the API Key for each developer. It can saved as an enviroment variable named `API_KEY` to be read by the Express app. For AWS, this project uses [AWS Named Profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) in the `serverless` configuration.

## Workflow

1. Dev server: For manual tests and development purposes, the Express server is available in `src` directory. From a terminal, run

   ```bash
   npm start
   ```

   and open `http://localhost:8000/api/gifs` for the results.

2. Build for Serverless & deploy from terminal

   ```bash
   npm run deploy
   ```

3. Unit-testing: Tests are written using Jest. From a terminal, run

   ```bash
   npm run test
   ```

## License

MIT

# Express Gifs

A wrapper around Giphy API to make requests without leaking API Key. Made with `express` and `serverless`.

## Purpose

Anyone working with the Giphy API knows that requests have to be made with the API key visible. The workaround is to use Giphy's wrapper but I realized it is easier to keep a standalone service that "acts" like Giphy server but only abstracts away from the API Key requirement. Since the service is hosted with AWS Lambda, it can scale according to the needs of demand. Overall, it was quite fun to fulfill my idea. I got to learn about the wonderful express and serverless integration. All configurations are separate from app logic, making deployment a breeze.

### Secrets

Giphy API provides the API Key for each developer. It is stored in an `.env` file to be read by the Express app. For AWS, this project uses [AWS Named Profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html).

### Workflow

1. Dev server: For manual tests and development purposes, the Express server is available in `src` directory. Simply run `npm start` from a terminal and checkout `http://localhost:8000/api/gifs` for the results.

2. Build for Serverless & deployment from terminal

   ```bash
   npm run build
   npm run deploy
   ```

3. Unit-testing: Tests are written using Jest. From a terminal, run

   ```bash
   npm run test
   ```

### License

MIT

# Express Gifs

A wrapper around Giphy API to make requests without leaking API Key. Made with `express` and `serverless`.

## Serverless & AWS Access Keys

You have to export AWS API & Secret so that Serverless can access them during deployment

```bash
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
# AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are now available for serverless to use
serverless deploy
```

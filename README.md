# API DynamoDB Validator with Jest test

Validate your next API endpoints with simple validator `jsonschema`. 

**Included Resources:**

- API gateway
- Lambda function
- Jest test

**NOTE:** These are code snippets to validate your API endpoints. This project does not run alone.

## Quick Start

### Prerequisites 

Install Serverless Framework

```bash
`npm install -g serverless`
```

Create Serverless project

```bash
$ sls create --template-url https://github.com/mosufy/serverless-templates/tree/master/api-sqs --path my-service
$ cd my-service
```

Install dependencies

```bash
$ yarn install
```

Start local

```bash
$ yarn start
```

Access local url via browser or Postman (recommended): http://localhost:8181/ping.

## Directory Structure

```
├── schemas
|   └── experiment_request.json
├── src
|   ├── core
|   |   └── experimentRepository.js
|   ├── handlers
|   |   └── add.js
|   ├── middlewares
|   |   └── validationUtils.js
|   ├── services
|   |   └── DynamoDBServices.js
|   └── helpers.js
└── tests
    ├── core
    |   └── experimentRepository.spec.js
    ├── services
    |   └── DynamoDBServices.spec.js
    └── helpers.spec.js
```

**schemas/**  
File json for your data schema.

**src/**  
Main source code for your application.

**src/core/**  
Write application core business/application logic here.

**src/handlers/**  
Entry point for all events.

**src/middlewares/**  
Request middlewares. See [Middlewares](#middlewares) for more information.

**src/services/**  
3rd party services or modules.

**tests/**  
All test files to be written here.
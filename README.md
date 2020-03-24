# init-typescript
Serverless microservice using Typescript.

# Tools
### Typescript
By making use of the template aws-nodejs-typescript  we have typescript and webpack from start.
Typescript config is located at tsconfig.json
The full command to start the project from scratch is
```sh
$ serverless create --template aws-nodejs-typescript --path service-folder --name serviceName
```


### Jest
We use jest as our testing framework.
Tests are located in the /test directory
To run all tests and see the test coverage run:
```sh
$ npm run test
```
### Linter
We use ESLint with a typescript plugin
Configuration file: .eslintrc.js
To see linter errors run
```sh
$ npm run lint
```

# Offline Development
## Simulate AWS environment with LocalStack
[LocalStack](https://github.com/localstack/localstack) allows us to mock a complete cloud environment in our local env.
In the project was included the docker compose that setup the environment. 

### Running LocalStack
In the terminal, run:
```sh
docker-compose -f localstack-compose.yml up -d
```

Then you can even deploy your Serverless application into the LocalStack environment, just run in terminal:
```sh
sls deploy -s local -v
```

### Terminate LocalStack
In the terminal, run:
```sh
docker-compose -f localstack-compose.yml down
```

### LocalStack Plugins
[awslocal cli](https://github.com/localstack/awscli-local): Provides a cli that interacts directly with the LocalStack env.

### Individual function local invokes
We are using serverless invoke local
We define events in /tests/mocks/events
To run or debug a function locally use:
```sh
$ npm run local [function-name] [event-name]
```

### Serverless Offline
ALternatively you can set the whole development environment locally:

First you need to run elasticmq docker image(used to support local sqs):
```sh
$ docker run -p 9324:9324 softwaremill/elasticmq
```
After that you can start the develpment server
```sh
$ npm run offline
```

### References

[Serverless Blueprint](https://simplyanvil.com/our-serverless-blueprint/)



### Plugins references

We use the following plugins, mostly for local development

| Plugin | README |
| ------ | ------ |
| Serverless Webpack | [plugins/serverless-webpack/README.md][SLS-Webpack] |
| Serverless Offline | [plugins/serverless-offline/README.md][SLS-Offline] |



[SLS-Webpack]: <https://github.com/serverless-heaven/serverless-webpack/blob/master/README.md>
[SLS-Offline]: <https://github.com/dherault/serverless-offline/blob/master/README.md>
   


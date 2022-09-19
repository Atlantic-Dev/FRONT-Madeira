<p align="center">
<code>
<img width="50%"heigth="50%" src="https://res.cloudinary.com/db0jqczp4/image/upload/v1663529605/Banner.45044716e3473aa288dd_wei4gu.png">
</code>
</p>

Git clone for starter repository

https://github.com/Atlantic-Dev/FRONT-Madeira


## Installation

```bash
$ npm install
```

## Deploy in AWS
Having the AWS CLI installed on our computer, use the following command, stop at the root of the repository and run:

```bash
$ bash deploy.sh
```

This command will create an updated docker image and automatically upload and deploy it to your AWS instance


## Running the app

```bash
# development
$ npm start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm test

# e2e tests
$ npm run cypress:open
```

### Environment Variables Allowed

```bash
# Application
- REACT_APP_SERVER_URL
- REACT_APP_CLIENT_URL

# Token
- REACT_APP_JWT_SECRET


## Docker

```bash
# create build
$ docker build

```

## Links

Deploy:

```bash
http://react-alb-1195746012.us-east-1.elb.amazonaws.com/
```

## Technologies
  <a href="https://es.reactjs.org/" target="blank"><img src="https://res.cloudinary.com/db0jqczp4/image/upload/v1663567530/react_fxhhhe.png" width=8% alt="React Logo" /></a> 
  <a href="https://es.redux.js.org/" target="blank"><img src="https://res.cloudinary.com/db0jqczp4/image/upload/v1663567530/redux_whribl.png" width=8% alt="Redux Logo" /></a>
  <a href="https://aws.amazon.com/es/" target="blank"><img src="https://res.cloudinary.com/db0jqczp4/image/upload/v1663554113/aws_tdfzqq.png" width=8% alt="AWS Logo" /></a>
  <a href="https://www.docker.com/" target="blank"><img src="https://res.cloudinary.com/db0jqczp4/image/upload/v1663554113/docker_zq7kse.png" width=8% alt="Docker Logo" top="50px"/></a>
  <a href="https://www.cypress.io/" target="blank"><img src="https://res.cloudinary.com/db0jqczp4/image/upload/v1663568302/cypress_qwynvy.png" width=8% alt="Cypress Logo" /></a>
## Team members

- **FrontEnd** - Lucia Chinni - luchinni8@gmail.com
- **FrontEnd** - Hilber Fraiese - hilberfraiese92@gmail.com
- **FrontEnd** - Franco Fraiese - fraancofraiese@gmail.com
- **FrontEnd** - Gustavo Esperguin - duduespeguin1@gmail.com

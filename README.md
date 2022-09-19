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
Teniendo instalado AWS CLI dentro de nuestro equipo, utilizar el siguiente comando, pararse en la raiz del repositorio y ejecutar:

```bash
$ bash deploy.sh
```
Este comando creara una imagen de docker actualizada y lo subira y deployara automaticamente en su instancia de AWS


## Running the app

```bash
# development
$ npm run start

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
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Environment Variables Allowed

```bash
# Application
- REACT_APP_SERVER_URL
- REACT_APP_CLIENT_URL

# Token
- REACT_APP_JWT_SECRET
```

## Docker

```bash
# create build
$ docker build

```

## Links

$ Deploy main:

```bash
http://react-alb-1195746012.us-east-1.elb.amazonaws.com/
```

## Team members

- **FrontEnd** - Lucia Chinni - luchinni8@gmail.com
- **FrontEnd** - Hilber Fraiese - hilberfraiese92@gmail.com
- **FrontEnd** - Franco Fraiese - fraancofraiese@gmail.com
- **FrontEnd** - Gustavo Esperguin - duduespeguin1@gmail.com

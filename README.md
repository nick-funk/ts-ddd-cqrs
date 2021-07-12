# ts-ddd-cqrs

An example app showing how DDD (Domain Driven Design) and CQRS (Command Query Responsibility Segregation) can work in a Typescript/React/GraphQL/Node.js stack.

# Start it up

Set the environment variables in a `.env` file in the `server` folder.

```
PORT=7000
JWT_SIGNING_KEY=secret
ALLOWED_ORIGINS=http://localhost:7000,http://localhost:3000
```

Open a terminal to start up server:

```
cd server
npm install
npm run start
```

Set the server API URL in a `.env` file in the `client` folder.

```
REACT_APP_BACKEND_URL=http://localhost:7000
```

Open another terminal to start up client:

```
cd client
npm install
npm run start
```
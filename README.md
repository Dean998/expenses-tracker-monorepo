# Expenses Tracker

## Setup and Run the Application

This guide will walk you through the steps to set up and run the application locally.

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Yarn](https://yarnpkg.com/) (Package manager)
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/)
- A Git client (e.g., GitHub Desktop, or Git CLI)
- create `.env` file and copy `.env.example` values as they same for development in apps/client and apps/server

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/dean998/expenses-tracker-monorepo.git
cd expenses-tracker-monorepo
```

2. Install Dependencies
   Install the necessary dependencies using Yarn:

```bash
yarn
```

This will install all the required dependencies for both the client and server.

3. Start Docker Containers
   Start the required Docker containers in detached mode. The -d flag runs the containers in the background.

```bash
docker-compose up -d
```

Note: The -d flag is short for detached mode, which means the containers will run in the background and won't block your terminal.

4. Run the Application
   Once the containers are up and running, start both the client and the server:

```bash
yarn dev
```

This command will start the development server for both the client and the backend server. You should now be able to access the application by navigating to:

Frontend: http://localhost:3000

Backend: http://localhost:8000/graphql (GraphQL API)

5. Stop the Docker Database Container
   To stop the running containers, use:

```bash
docker-compose down
```

This will stop and remove the containers created by docker-compose up.

Troubleshooting
If you encounter any issues with Docker, ensure Docker is running before executing docker-compose commands.

If you experience problems with dependencies, try removing node_modules and yarn.lock and then running yarn again:

```bash
rm -rf node_modules
rm yarn.lock
yarn
```

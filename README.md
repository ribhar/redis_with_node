# Node.js Application with MongoDB and Redis Integration

This is a sample Node.js application that integrates MongoDB for data storage and Redis for caching. The application showcases basic CRUD operations and serves as a starting point for building more complex applications.

## Prerequisites

Before running the Node.js application, ensure that you have the following installed:

- Node.js
- MongoDB
- Redis

## Installation and Setup

1. Clone the Repository:
   ```
   git clone https://github.com/ribhar/redis_with_node.git
   ```

2. Navigate to the Project Directory:
   ```
   cd redis_with_node/
   ```

3. Install dependencies using npm.
   ```
   npm install
   ```

4. Run Redis server on your local machine.
   ```
   redis-server
   ```

5. Start the Node.js server.
   ```
   npm start
   ```

## Configuration

Ensure that you configure the environment variables for the application. You can use the provide `.env` or Create a new `.env` file in the root directory and modify the variables as needed. Below is an example of the `.env` file:

```
PORT=8080
MONGO_URI=your_mongodb_uri
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
```

Replace `your_mongodb_uri` with your MongoDB connection string, and `your_redis_host` and `your_redis_port` with the appropriate Redis connection details.

## Usage

You can access the application at `http://localhost:8080`. The API endpoints will be available for performing CRUD operations on the data.

To compare the response time of the two API calls, follow these steps:

1. Make the first API call to `http://localhost:8080/api/users/:id` with the provided sample request body.

2. Note the time taken to receive the response. 

3. Make the second API call to the same endpoint.

4. Compare the response times of both API calls.

## Folder Structure

The folder structure for the application is as follows:

```
- src
    - config
        - config.ts
        - db.config.ts
        - redis.config.ts
    - controllers
        - user.controller.ts
    - models
        - user.model.ts
    - routes
        - user.routes.ts
    - app.ts
- package.json
- .env
- .gitignore
- tsconfig.json
- README.md
```

## Contribution

Feel free to contribute to the project by creating pull requests or reporting issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This application was created as part of a coding assessment and serves as a basic implementation of a Node.js server with MongoDB and Redis integration. Special thanks to the creators of Node.js, MongoDB, and Redis for their excellent tools and documentation.
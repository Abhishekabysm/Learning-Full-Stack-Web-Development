# Express.js Application

This is a simple Express.js application demonstrating basic routing and static file serving.

## Overview

This application sets up an Express.js server with the following routes:
- A root route that responds with "Hello World!"
- A `/blog` route that responds with "Hello Blog"
- A `/blog/:slug` route that responds with a personalized message based on the `slug` parameter

It also serves static files from the `public` directory.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management.

## Installation

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Abhishekabysm/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies**

   Install the required npm packages:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Usage

1. **Start the Server**

   Run the server using:

   ```bash
   node server.js
   ```

   Replace `server.js` with the filename of your server script if it's different.

2. **Access the Application**

   Open your web browser and navigate to:

   - **Root Route**: [http://localhost:3000/](http://localhost:3000/) - Displays "Hello World!"
   - **Blog Route**: [http://localhost:3000/blog](http://localhost:3000/blog) - Displays "Hello Blog"
   - **Dynamic Blog Route**: [http://localhost:3000/blog/example-slug](http://localhost:3000/blog/example-slug) - Displays "Hello example-slug"

## Code Explanation

- **Setup**:
  ```javascript
  const express = require("express");
  const app = express();
  const port = 3000;
  ```

  Initializes the Express application and sets the port to `3000`.

- **Static File Serving**:
  ```javascript
  app.use(express.static("public"));
  ```

  Serves static files from the `public` directory.

- **Root Route**:
  ```javascript
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  ```

  Responds with "Hello World!" when the root route is accessed.

- **Blog Route**:
  ```javascript
  app.get("/blog", (req, res) => {
    console.log(req);
    console.log(req.params);
    res.send("Hello Blog");
  });
  ```

  Responds with "Hello Blog" and logs the request object and parameters.

- **Dynamic Blog Route**:
  ```javascript
  app.get("/blog/:slug", (req, res) => {
    console.log(req);
    console.log(req.params);
    res.send(`Hello ${req.params.slug}`);
  });
  ```

  Responds with a personalized message based on the `slug` parameter and logs the request object and parameters.

- **Start Server**:
  ```javascript
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  ```

  Starts the server and listens on port `3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

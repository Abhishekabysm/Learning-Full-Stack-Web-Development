# Node.js HTTP Server

This is a simple Node.js HTTP server script that responds with a plain text message.

## Overview

This script creates a basic HTTP server using Node.js's built-in `http` module. The server listens on a specified port and responds with the message "Hello Abhishek Kumar" to any incoming requests.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. **Clone the Repository**

   If you haven’t cloned the repository yet, you can clone it using:

   ```bash
   git clone https://github.com/Abhishekabysm/your-repository.git
   cd your-repository
   ```

2. **Run the Server**

   To start the server, run the following command in your terminal:

   ```bash
   node server.js
   ```

   Make sure to replace `server.js` with the filename of your script if it's different.

3. **Access the Server**

   Open your web browser and navigate to:

   ```
   http://127.0.0.1:3000/
   ```

   You should see the message "Hello Abhishek Kumar" displayed in your browser.

## Code Explanation

- **Dependencies**: This script uses the built-in `http` module from Node.js.
  
- **Server Creation**:
  ```javascript
  const { createServer } = require("node:http");
  ```

- **Server Configuration**:
  ```javascript
  const hostname = "127.0.0.1";
  const port = 3000;
  ```

- **Server Handling**:
  ```javascript
  const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Abhishek Kumar");
  });
  ```

- **Server Listening**:
  ```javascript
  server.listen(port, hostname, () => {
    console.log(`Server chalu ho gaya hai bhai iss http://${hostname}:${port}/ par`);
  });
  ```

  The server listens on port `3000` and hostname `127.0.0.1` (localhost), and logs a message to the console when it's up and running.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

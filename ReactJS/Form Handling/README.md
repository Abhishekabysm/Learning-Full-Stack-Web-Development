# React Form Submission Example

This is a simple React application that demonstrates how to handle form submissions using the `react-hook-form` library. The form includes basic validation and simulates a network request to a local server.

## Features

- **Form Validation**: Basic validation for username and password fields.
- **Asynchronous Submission**: Simulates network delays and submits form data to a local server.
- **Error Handling**: Displays validation errors for incorrect or blocked users.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Abhishekabysm/react-form-example.git
cd react-form-example
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Start the Development Server

Make sure you have a local server running on port 3000 to handle the form submissions. You can use the following simple Express.js server:

```javascript
// server.js
import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Form submission received!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

Start the server:

```bash
node server.js
```

### 4. Run the React App

```bash
npm start
```

or

```bash
yarn start
```

The application will start on `http://localhost:3000`.

## Form Validation

The form includes the following fields with validation:

- **Username**: Required, minimum 3 characters, maximum 8 characters.
- **Password**: Required, minimum 7 characters.

## Simulated Network Delay

You can simulate a network delay by uncommenting the `await delay(3);` line in the `onSubmit` function. This will delay the submission by 3 seconds.

## Handling Errors

You can set custom errors in the `onSubmit` function based on the form data. For example:

```javascript
if (data.username !== "Abhishek") {
  setError("username", { message: "Your credentials are incorrect" });
}

if (data.username === "Aman") {
  setError("blockedUsers", { message: "Sorry, this user is blocked" });
}
```

These errors will be displayed under the respective form fields.

## License

This project is licensed under the MIT License.

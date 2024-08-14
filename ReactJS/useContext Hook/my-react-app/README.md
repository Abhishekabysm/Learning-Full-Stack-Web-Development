# React Context Example with Vite

This project demonstrates a simple React application that uses context to manage state across multiple components. The application is built using Vite for fast development and bundling.

## Features

- **Navbar**: A navigation bar for the application.
- **Button**: A button component that interacts with the global state.
- **Component1**: An additional component that interacts with the global state.
- **React Context**: Global state management using React Context to share data (like `count`) between components.

## Technologies Used

- React
- React Router DOM
- Vite (for development server and build tool)
- React Context API

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abhishekabysm/your-repo-name.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd your-repo-name
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server and open the application in your default browser.

## Usage

- **Global State Management**: The `count` state is managed using the React Context API and is shared between the `Button` and `Component1` components. The `counterContext.Provider` wraps the components that need access to this global state.

- **Button Component**: The `Button` component allows users to interact with the global `count` state.

- **Component1**: Another component that can access and display or manipulate the `count` state.

## Folder Structure

- **`src/`**: Contains all the source code for the application.
  - **`components/`**: Contains React components like `Navbar`, `Button`, and `Component1`.
  - **`context/`**: Contains the context definition for managing global state.
  - **`assets/`**: Contains static assets like images.
  - **`App.css`**: Styles for the main application.
  - **`App.jsx`**: Main application file where context is provided and routes are defined.
  - **`main.jsx`**: Entry point for the React application.

## Creating the Context

In your `context/context.js` file:

```javascript
import { createContext } from 'react';

export const counterContext = createContext();
```

## How It Works

- **Context Setup**: The `counterContext` is created and provided to the component tree in `App.jsx`.
- **Component Consumption**: Components like `Button` and `Component1` consume this context to access or modify the `count` state.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

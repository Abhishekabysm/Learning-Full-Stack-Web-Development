# React-Redux Counter Application

This is a simple React application that demonstrates the use of Redux for state management. The application includes a counter with increment, decrement, and multiply functionalities. It also features a reusable `Navbar` component.

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   └── Navbar.jsx
│   ├── redux/
│   │   └── counter/
│   │       └── counterSlice.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

## Features

- **Counter**: A simple counter with three actions: increment, decrement, and multiply.
- **Redux Integration**: State management is handled by Redux.
- **Reusable Components**: Includes a reusable `Navbar` component.

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhishekabysm/react-redux-counter.git
   cd react-redux-counter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you are using yarn:

   ```bash
   yarn install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

### Usage

- **Increment**: Click the `+` button to increment the counter.
- **Decrement**: Click the `-` button to decrement the counter.
- **Multiply**: Click the `*` button to multiply the counter by a predefined factor.

## Redux Setup

The application uses Redux for state management. The state of the counter is managed by a slice defined in `./redux/counter/counterSlice.js`.

### Actions

- **increment**: Increases the counter by 1.
- **decrement**: Decreases the counter by 1.
- **multiply**: Multiplies the counter by a specified factor.

### Selectors

- `useSelector((state) => state.counter.value)`: Retrieves the current value of the counter from the Redux store.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was bootstrapped with [Vite](https://vitejs.dev/).
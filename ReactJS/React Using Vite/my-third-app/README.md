# Vite + React App

This is a simple React application set up with Vite, demonstrating the use of state, effects, and component integration. The app features a basic counter, dynamic styling, and navigation links.

## Features

- **React and Vite Logos**: The app displays logos for both React and Vite, which link to their respective websites for further learning.
- **State Management**: The app uses React's `useState` hook to manage the counter and a color-related state.
- **Effect Hooks**: The app uses `useEffect` hooks to perform actions when the component mounts and when the counter changes.
- **Navbar Component**: The app includes a `Navbar` component that dynamically changes its color based on state.

## How It Works

### 1. State Management

- **`count`**: This state variable keeps track of the number of times the button has been clicked. Each click increments the `count` by 1.
- **`color`**: This state variable tracks a color-related value that increments whenever the `count` changes.

### 2. Effect Hooks

- **Initial Welcome Alert**: 
  - The first `useEffect` runs once when the component is mounted. It displays an alert saying, "Hey! Welcome to our page."
  ```javascript
  useEffect(() => {
    alert("Hey! Welcome to our page");
  }, []);
  ```

- **Count Change Alert and Color Update**: 
  - The second `useEffect` runs whenever the `count` state changes. It alerts the user that the count has changed and also increments the `color` state.
  ```javascript
  useEffect(() => {
    alert("Count was changed");
    setColor(color + 1);
  }, [count]);
  ```

### 3. JSX Structure

- **Navbar**: The `Navbar` component is rendered at the top of the page, with a dynamic color passed as a prop.
  ```javascript
  <Navbar color={"navy" + "blue" + { color }} />
  ```

- **Logos**: Two images are displayed, each linking to the Vite and React documentation.
  ```javascript
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
  ```

- **Counter**: A button is provided to increment the `count`. The current value of `count` is displayed inside the button.
  ```javascript
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  ```

- **Instructions and Links**: The app includes a message prompting users to edit the code and provides links to learn more about Vite and React.
  ```javascript
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
  ```

## How to Run the App

1. **Clone the Repository**: 
   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Start the Development Server**: 
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Conclusion

This simple Vite + React application demonstrates basic React features, such as state management and effect hooks, while also incorporating dynamic styling and external component integration. Feel free to explore and modify the code to learn more about React and Vite!

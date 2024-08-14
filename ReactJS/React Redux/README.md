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

---

## Using React Redux

This section provides guidance on how to integrate Redux with React in this project. Redux is used for state management in this application.

### Prerequisites

Make sure you have the following packages installed:

- `react-redux`
- `@reduxjs/toolkit`

You can install these packages using npm or yarn:

```bash
npm install react-redux @reduxjs/toolkit
```

or

```bash
yarn add react-redux @reduxjs/toolkit
```

### Setting Up Redux

1. **Create a Redux Slice**

   A slice defines the initial state and reducers for your application. Create a file `counterSlice.js` under `src/redux/counter/` with the following content:

   ```javascript
   // src/redux/counter/counterSlice.js

   import { createSlice } from '@reduxjs/toolkit'

   const initialState = {
     value: 0,
   }

   export const counterSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
       increment: (state) => {
         state.value += 1
       },
       decrement: (state) => {
         state.value -= 1
       },
       incrementByAmount: (state, action) => {
         state.value += action.payload
       },
       multiply: (state) => {
         state.value *= 2
       },
     },
   })

   export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions

   export default counterSlice.reducer
   ```

2. **Configure the Redux Store**

   Set up the Redux store to include your slice. Create a file `store.js` under `src/redux/`:

   ```javascript
   // src/redux/store.js

   import { configureStore } from '@reduxjs/toolkit'
   import counterReducer from './counter/counterSlice'

   export const store = configureStore({
     reducer: {
       counter: counterReducer,
     },
   })
   ```

3. **Provide the Store to React**

   Wrap your application with the Redux `Provider` component and pass the store to it. Update `main.jsx`:

   ```javascript
   // src/main.jsx

   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import { Provider } from 'react-redux'
   import { store } from './redux/store'
   import App from './App'
   import './index.css'

   ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
       <App />
     </Provider>
   )
   ```

### Using Redux in Components

1. **Access State with `useSelector`**

   To access the state from the Redux store, use the `useSelector` hook. For example, in your `App.jsx`:

   ```javascript
   import { useSelector, useDispatch } from 'react-redux'
   import { decrement, increment, multiply, incrementByAmount } from './redux/counter/counterSlice'

   function App() {
     const count = useSelector((state) => state.counter.value)
     const dispatch = useDispatch()

     return (
       <div>
         <button onClick={() => dispatch(decrement())}>-</button>
         Currently count is {count}
         <button onClick={() => dispatch(increment())}>+</button>
         <button onClick={() => dispatch(multiply())}>*</button>
         <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
       </div>
     )
   }

   export default App
   ```

2. **Dispatch Actions with `useDispatch`**

   Use the `useDispatch` hook to dispatch actions to the Redux store. You can dispatch actions like `increment`, `decrement`, `multiply`, or `incrementByAmount` as shown in the example above.

### Additional Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)

---

This section should help users understand how to set up and use Redux with React in your project. Feel free to adjust it based on your project's specifics or additional features you might have implemented.

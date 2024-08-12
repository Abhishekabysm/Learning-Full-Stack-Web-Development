# Steps To Install Tailwind CSS

## Step-1

```
npm install -D tailwindcss
npx tailwindcss init
```

## Step-2

```
Add these in to tailwind.config:-

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Step-4

```
Create src folder and inside make a input.css file and add these in to that css file:-

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step-5

```
Go to the package.json and inside the scripts below test add this:-

"build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"

NOTE:- Dont remove any type of quotations.
```

## Step-6

```
Paste this in to the terminal:-

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

NOTE:- use all npm/npx inside the terminal
```

## Step-7

```
Now you can open your live server and see the changes.
```

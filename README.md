# React Project Starter
## Installation
1- Create a React app:

```
npx create-react-app react-appname
```

2- Navigate to the project folder

```
cd my-app  
```

3- Start the development server

```
npm start  
```

## Key Concepts
### Props
Props (short for "properties") are used to pass data from parent to child components.

```
function Greeting(props) {  
  return <h1>Hello, {props.name}!</h1>;  
}  
<Greeting name="John" />  
```

### State
State allows components to manage dynamic data that can change over time.


```
import React, { useState } from 'react';  

function Counter() {  
  const [count, setCount] = useState(0);  

  return (  
    <div>  
      <p>Count: {count}</p>  
      <button onClick={() => setCount(count + 1)}>Increase</button>  
    </div>  
  );  
}  
```

### Features
Reusable Components: Build modular and reusable UI elements.
Props and State: Manage data flow and dynamic updates in the application.
React Hooks: Simplify state and lifecycle management with useState and useEffect.


## Running the Application
To start the app locally:

```
npm start  
```

To build the app for production:

```
npm run build  
```

### Project Structure
```
src/  
|-- components/   # Reusable components  
|-- App.js        # Main app logic  
|-- index.js      # Entry point  
```

## macOS Kill a Process
### 1- List Processes (mac)
```
ps aux | grep node
```

### 2- Kill the Process (mac)
Locate the Process ID (PID) of the React server from the output and terminate it:

```
kill -9 <processId>
```

## Windows Kill a Process
### 1- List Processes (windows)
```
netstat -ano | findstr :3000

```

### 2- Kill the Process (windows)
Locate the Process ID (PID) of the React server from the output and terminate it:

```
taskkill /PID <processId> /F 
Stop-Process -Id <processId> -Force
```
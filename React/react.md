# What is React?
React is a JavaScript library for building user interfaces (UI).

# setup
npx create-react-app my-app    (node package executor )
cd my-app
npm start

# new way 
npm create vite@latest
project name
react
js

cd projectname
npm install
npm run dev
####
react and react-dom libraries
# main.jsx   or   index.js => these are entry point to react

# tailwind
npm install tailwindcss @tailwindcss/vite
# in vite.config.js
import tailwaindcss from '@tailwindcss/vite'
plugins...> tailwaindcss(),
# index.css
@import "tailwindcss";

# #### DEVUI to get components ####

# ****HOOKS****
# useState
To store and update local state in a functional component.
const [state, setState] = useState(initialValue);

# UseEffect
To run side effects like API calls, subscriptions, or timers after rendering.

useEffect(() => {
  // side-effect logic  // memorizedFn();
}, [dependencies]);

# UseCallback
To memoize a callback function, so it's not recreated on every render.
const memoizedFn = useCallback(() => {
  // your function logic
}, [dependencies]);



# UseRef
To access DOM elements directly (like document.getElementById)

const inputRef = useRef();      // Step 1: Create a ref

<input ref={inputRef} />        // Step 2: ref of input element  pass to InputRef

inputRef.current .........>give reference 


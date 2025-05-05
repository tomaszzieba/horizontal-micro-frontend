import { useState } from "react";
import "./App.css";

function App({ globalCount, incrementGlobalCount }) {
  const [count, setCount] = useState(0);

  return (
    <div id="app_1" className="card">
      <h2>Remote App 1</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={incrementGlobalCount}>
        globabl count is {globalCount}
      </button>
    </div>
  );
}

export default App;

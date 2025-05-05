import React, { Suspense, useState } from "react";
import "./App.css";

const RemoteApp1 = React.lazy(() => import("remote_app_1/App"));
const RemoteApp2 = React.lazy(() => import("remote_app_2/App"));

function App() {
  const [globalCount, setGlobalCount] = useState(0);

  const incrementGlobalCount = () => setGlobalCount((count) => count + 1);

  return (
    <div className="container">
      <div id="app_shell" className="card">
        <h2>Application Shell</h2>
        <button onClick={() => setGlobalCount((count) => count + 1)}>
          global count is {globalCount}
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp1
          globalCount={globalCount}
          incrementGlobalCount={incrementGlobalCount}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp2
          globalCount={globalCount}
          incrementGlobalCount={incrementGlobalCount}
        />
      </Suspense>
    </div>
  );
}

export default App;

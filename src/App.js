import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="container">
      <div className="form">
        <div className="title">Registration</div>
        <div className="steps">
          <div
            className={`step one ${page === 1 && "active"}`}
            onClick={() => setPage(1)}
          >
            1
          </div>
          <div className="line" />
          <div
            className={`step two ${page === 2 && "active"}`}
            onClick={() => setPage(2)}
          >
            2
          </div>
        </div>
        <div className="pages">
          <div className={`page one ${page === 1 && "active"}`}>
            <button onClick={() => setPage(2)}>Next</button>
          </div>
          <div className={`page two ${page === 2 && "active"}`}>
            <button onClick={() => setPage(1)}>Prev</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

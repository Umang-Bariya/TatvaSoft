import "./App.css";
import HomePage from "./HomePage";
import Apple from "./Apple";
import { NotFound } from "./NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/" style={{ marginLeft: 10 }}>
          Home
        </Link>
        <Link to="/apple" style={{ marginLeft: 10 }}>
          Apple
        </Link>
      </div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

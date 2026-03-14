import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen w-full bg-stone-900 text-gray-300 px-8 sm:px-16 md:px-48 py-12">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

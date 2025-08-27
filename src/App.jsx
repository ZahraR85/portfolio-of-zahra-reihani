import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
//import RequestCV from "./components/Pages/RequestCV";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/request-cv" element={<RequestCV />} /> */}
    </Routes>
  );
}

export default App;

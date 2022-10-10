import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Aside from "./Components/Aside/Aside";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

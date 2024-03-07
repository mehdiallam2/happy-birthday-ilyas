import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home name="Ilyas" month={6} day={30} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

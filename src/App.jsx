import { BrowserRouter, Routes, Route } from "react-router-dom";
import HireMe from "./components/HireMe";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        
        <Route path="/" element={<Home />} />

        
        <Route path="*" element={<NotFound />} />

      </Routes>

      
      <HireMe />

    </BrowserRouter>
  );
}

export default App;
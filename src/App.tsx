import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import "./style/App.css";
import Header from "./Header";
import Content from "./Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SlideData from "./components/slide/SlideData";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/slide" element={<SlideData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

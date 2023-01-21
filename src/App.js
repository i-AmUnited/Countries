import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import PageLayout from "./pagelayout"
import Error from "./ErrorPage"
import SingleCountry from "./singleCountry";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<PageLayout />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

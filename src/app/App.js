import React from "react";
import {
  BrowserRouter, Link, Route, Routes
} from "react-router-dom";
import Greeting from '../features/greetings/Greeting';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Link to='/greetings'>new greeting</Link>} />
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App

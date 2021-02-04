import React from "react";

import { BrowserRouter } from "react-router-dom";

import Route from "./routes";

const App: React.FC = () => (
  <BrowserRouter>
    <Route />
  </BrowserRouter>
);

export default App;

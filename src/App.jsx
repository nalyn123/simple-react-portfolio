import React, { ComponentType, useEffect } from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
// import { Layout } from "@template/index";
import { Layout, Default } from "@template/index";

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <AppController />
    </BrowserRouter>
  );
}

const AppController = () => {
  return (
    <Routes>
      {routes.map((value, index) => (
        <Route
          key={index}
          path={value?.path}
          element={<ProtectedRoute {...value} />}
        ></Route>
      ))}
    </Routes>
  );
};

const ProtectedRoute = (props) => {
  switch (props?.template) {
    case "layout":
      return <Layout component={props?.component} />;
    default:
      return <Default component={props?.component} />;
  }
};

export default App;

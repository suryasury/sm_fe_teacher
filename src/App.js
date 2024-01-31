import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import PageNotFound from "./components/pageNotFound";
import ErrorFallBack from "./components/errorFallBack";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      autoHideDuration={5000}
    >
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
            errorElement={<ErrorFallBack />}
          />
          <Route
            path="/"
            element={<PrivateRoute />}
            errorElement={<ErrorFallBack />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
};

export default App;

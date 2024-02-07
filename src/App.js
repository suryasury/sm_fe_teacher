import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import PageNotFound from "./components/pageNotFound";
import ErrorFallBack from "./components/errorFallBack";
import { SnackbarProvider } from "notistack";
import StudentList from "./components/studentList";
import StudentDetails from "./components/studentDetails";
import ForgotPassword from "./components/forgotPassword";
import ResetPassword from "./components/resetPassword";
import PasswordResetSuccessPage from "./components/passwordResetSuccess";

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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route
            path="/password/reset/success"
            element={<PasswordResetSuccessPage />}
          />
          <Route
            path="/"
            element={<PrivateRoute />}
            errorElement={<ErrorFallBack />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/student/list/:sectionId" element={<StudentList />} />
            <Route
              path="/section/student/details/:studentId"
              element={<StudentDetails />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
};

export default App;

// // Auth.js
// import { createContext, useContext, useEffect, useState } from "react";
// import { getUserDetails } from "./api/api";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const login = (token, user) => {
//     console.log("user", token, user);
//     localStorage.setItem("sessionToken", token);
//     setUser(user);
//   };

//   const getCurrentSession = () => {
//     return localStorage.getItem("sessionToken");
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("sessionToken");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, getCurrentSession, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { AuthProvider, useAuth };

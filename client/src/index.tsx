import React from "react";
import ReactDOM from "react-dom/client";
import apolloClient from "./lib/apollo/apolloConfig";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  </ApolloProvider>
);

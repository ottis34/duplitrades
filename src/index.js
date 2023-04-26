import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </CookiesProvider>
);

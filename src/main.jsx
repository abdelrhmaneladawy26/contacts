import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactsPage from "./Pages/Contacts/ContactsPage.jsx";
import AddContactForm from "./components/Contacts/AddContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ContactsPage /> },
      { path: "/add-contact", element: <AddContactForm /> },
      { path: "/contacts", element: <ContactsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

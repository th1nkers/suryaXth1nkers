import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUp from "./personal/pages/ContactUp";
import HomePage from "./personal/pages/Home";
import RootLayout from "./RootLayout";
import { FooterContextProvider } from "./shared/context/footer-link-context";
import { ModalContextProvider } from "./shared/context/modal-context";
import FreeLanceWork from "./work/pages/FreeLanceWork";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "contact-up", element: <ContactUp /> },
        { path: "freelance-service", element: <FreeLanceWork /> },
      ]
    }
  ])
  return (
    <FooterContextProvider>
      <ModalContextProvider>

        <RouterProvider router={router} />

      </ModalContextProvider>
    </FooterContextProvider>
  )
}

export default App;

import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { FooterContextProvider } from "./shared/context/footer-link-context";
import { ModalContextProvider } from "./shared/context/modal-context";
import HomePage from "./personal/pages/Home";
import FreeLanceWork from "./work/pages/FreeLanceWork";
import RootLayout from "./RootLayout";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: (
        <div className="center">
          <h4>Page not found, go back to homepage: <span><Link to="/">Home</Link></span></h4>
        </div>
      ),
      children: [
        { index: true, element: <HomePage /> },
        { path: "contact-up", element: <HomePage /> },
        // { path: "freelance-service", element: <FreeLanceWork /> },
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

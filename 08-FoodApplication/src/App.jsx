import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const root = document.getElementById("root");

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/home',
        element: <Body/>
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={appRouter}/>);


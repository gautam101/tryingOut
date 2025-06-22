import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import ResturantMenu from "./component/ResturantMenu";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import store from "./utils/appStore";
const AppLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);

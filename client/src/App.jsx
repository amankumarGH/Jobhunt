import "./App.css";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Navbar = lazy(() => import("./pages/Navbar.jsx"));
const SignUp = lazy(() => import("./authentication/SignUp.jsx"));
const Login = lazy(() => import("./authentication/Login"));
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse.jsx";
import Profile from "./pages/Profile";
import JobDescription from "./pages/JobDescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
  {
    path: "/jobs",
    element: (
      <>
        <Jobs />
      </>
    ),
  },
  {
    path: "/browse",
    element: (
      <>
        <Browse />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Profile />
      </>
    ),
  },
  {
    path: "/description/:id",
    element: (
      <>
        <JobDescription />
      </>
    ),
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

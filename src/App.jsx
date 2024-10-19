import { useState } from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import '../css/app.css';
function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/profile/:pkmid",
            element: <Profile />,
          },
      ]);
    return (
        <div className="appContainer">
            <RouterProvider router={router} />
        </div>
    )
}
export default App
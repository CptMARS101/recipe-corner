import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipeForm from './COMPONENTS/recipeForm';
import RecipePage from './COMPONENTS/recipePage';
import Home from './COMPONENTS/home';
import LoginForm from './COMPONENTS/loginForm';
import Logout from './COMPONENTS/logout';
import Signup from './COMPONENTS/signup';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/form",
        element: <RecipeForm />
      },
      {
        path: "/recipes",
        element: <RecipePage />
      },
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/logout",
        element: <Logout />
      }
    ]
  } 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

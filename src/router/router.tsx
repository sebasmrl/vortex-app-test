import { Home, Dashboard, LoginPage, RegisterPage, DocsPage, WritersPage, DocumentEditorPage } from "../pages";
import { Outlet, createBrowserRouter } from "react-router-dom";
//import { PrivateRoute } from "./PrivateRoute";
import { ErrorPage } from "../shared";

export const router =  createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: 'dashboard',
        element: //<PrivateRoute>
                    <Dashboard />,
                // </PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'docs',
                element: <DocsPage />
            },
            {
                path: 'writers',
                element: <WritersPage />
            },
            {
                path: 'document-editor',
                element: <DocumentEditorPage />
            }
        ]
    },
    {
        path: 'auth',
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }

]);

import {createBrowserRouter, RouterProvider} from "react-router";
import App from "@/App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        id: "index",
        element: <App />

    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter
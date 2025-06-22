import {createBrowserRouter, RouterProvider} from "react-router";
import App from "@/App.tsx";
import AuthPage from "@/presentation/auth/pages/AuthPage.tsx";
import AccountSetup from "@/presentation/auth/pages/AccountSetup.tsx";
import LandlordPortalPage from "@/presentation/landlord/pages/LandlordPortalPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        id: "index",
        element: <App />,
        children: [
            { index: true, element: <AuthPage/> },
            { path: "authenticate", element: <AuthPage/> },
            { path: "account-setup", element: <AccountSetup/> },
            { path: "account", children: [
                    { path: "landlord", element: <LandlordPortalPage/> }
              ]
            },
        ]

    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter
import { createBrowserRouter } from "react-router-dom";
import ArtGrid from "../pages/Homepage/PageOverview/ArtGrid";
import Homepage from "../pages/Homepage/Homepage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {path:"", element: <Homepage/>},
            {path: "ArtGrid", element: <ArtGrid/>}
        ],
    },
]);
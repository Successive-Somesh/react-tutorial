import M1Home from "@modules/m1/M1Home";
import M2Home from "@modules/m2/M2Home";
import M3Home from "@modules/m3/M3Home";
import Child from "@components/Child";
import JSIntroPage from "@pages/JSIntroPage";
import JSXIntroPage from "@pages/JSXIntroPage";
import ReactIntroPage from "@pages/ReactIntroPage";
import LifeCyclePage from "@pages/LifeCyclePage";
import RenderChilds from "@pages/RenderChilds";
import NoMatchPage from '@pages/NoMatchPage';

const routes = [
    {
        path: "/",
        element: <Child />,
        module: 'introduction',
        children: [
            { index: true, element: <JSIntroPage /> },
            { path: 'JSXIntro', element: <JSXIntroPage /> },
            { path: 'ReactIntro', element: <ReactIntroPage /> },
        ]
    },
    {
        path: "/basics",
        element: <M1Home />,
        children: [
            { index: true, element: <RenderChilds /> },
            { path: "lifecycle", element: <LifeCyclePage /> },
        ],
    },
    {
        path: "/advance",
        element: <M2Home />,
        children: [
            { index: true, element: <RenderChilds /> },
            { path: "lifecycle", element: <LifeCyclePage /> },
        ],
    },
    {
        path: "/advance",
        element: <M2Home />,
        children: [
            { index: true, element: <RenderChilds /> },
            { path: "lifecycle", element: <LifeCyclePage /> },
        ],
    },
    {
        path: "/api-data",
        element: <M2Home />,
        children: [
            { index: true, element: <RenderChilds /> },
            { path: "lifecycle", element: <LifeCyclePage /> },
        ],
    },
    {
        path: "/testing",
        element: <M3Home />,
        children: [
            { index: true, element: <RenderChilds /> },
            { path: "lifecycle", element: <LifeCyclePage /> },
        ],
    },
    {
        path: "/performance",
        element: <M1Home />,
        children: [
            { index: true, element: <RenderChilds /> },
            { path: "lifecycle", element: <LifeCyclePage /> },
        ],
    },
    { path: "*", element: <NoMatchPage /> },
];
export default routes;
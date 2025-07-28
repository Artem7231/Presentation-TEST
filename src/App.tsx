import HomePage from "./pages/HomePage.tsx";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.tsx";
import CreatePresentationsPage from "./pages/CreatePresentationsPage.tsx";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/presentations' element={<CreatePresentationsPage/>}/>
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}
export default App

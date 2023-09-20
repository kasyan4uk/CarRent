import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";

const FavoritesPage = lazy(() =>import("./pages/Favourites/FavoritesPage"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CatalogPage = lazy(() => import("./pages/Catalog/CatalogPage"));


function App() {
    return (
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/CarRent/"}>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="catalog" element={<CatalogPage/>}/>
                        <Route path="favorites" element={<FavoritesPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;
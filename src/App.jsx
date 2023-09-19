import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/Catalog/CatalogPage";
import FavoritesPage from "./pages/Favourites/FavoritesPage";
import HomePage from "./pages/Home/HomePage";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <BrowserRouter basename="/CarRent">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="catalog" element={<CatalogPage/>}/>
                    <Route path="favorites" element={<FavoritesPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
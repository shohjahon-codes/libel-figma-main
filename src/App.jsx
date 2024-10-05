import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/home"
import { MainLayout } from "./layout/main-layout.jsx/main-layout"
import { Product } from "./pages/product/product"
import { Profile } from "./pages/profile/profile"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

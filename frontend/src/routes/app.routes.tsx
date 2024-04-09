import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "../components"
import { Home, NewProduct, NewPurchase, Profile, SearchPurchase } from "../pages"

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/new" element={<NewProduct />} />
        <Route path="/purchase/new" element={<NewPurchase />} />
        <Route path="/purchase/search" element={<SearchPurchase />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='*' element={<Navigate to='/' />}
      />
      </Routes>
    </>
  )
}
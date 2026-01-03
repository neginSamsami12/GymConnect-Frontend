import { TopProducts } from "../_components/top-products"

export default function WorkoutsListPage() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
      <TopProducts />
      <TopProducts />
      <TopProducts />
      <TopProducts />
      <TopProducts />
      <TopProducts />
    </div>
  )
}

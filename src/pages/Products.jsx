import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">
              Our Products
            </h1>

            <p className="text-gray-600 mt-4">
              Explore our full range of ceiling boards, insulation materials,
              and construction solutions designed for residential, commercial
              and industrial spaces.
            </p>
          </div>

          <ProductGrid products={products} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
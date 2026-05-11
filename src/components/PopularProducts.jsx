import { getAllProducts } from "@/lib/data";
import Link from "next/link";
import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const products = await getAllProducts();
  const popularProducts = products.slice(0, 3);
  
  return (
    <div className="bg-[#fcf9f8] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 animate__animated animate__fadeInUp">
          <div>
            <span className="badge badge-lg bg-sky-100 text-sky-800 border-0 font-semibold tracking-widest text-xs uppercase px-4 py-3 mb-4">
              Trending Now ✨
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
              Popular{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-base-content/70 text-sm mt-2 max-w-md">
              Handpicked summer essentials loved by thousands of customers.
            </p>
          </div>
          <Link
            href="/products"
            className="btn btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full px-6 transition-all duration-200 shrink-0"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
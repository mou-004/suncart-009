import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import products from "@/data/data.json";

const ProductsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const { category, search } = params || {};

  const filteredProducts = products.filter((product) => {
    const matchCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            All{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="text-base-content/50 text-sm mt-2">
            Premium summer essentials designed for your everyday moments.
          </p>
        </div>

        <SearchBar searchParams={searchParams} />

        <Categories searchParams={searchParams} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h2 className="text-xl font-semibold text-gray-600">
                No products found
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Try searching with a different name or category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
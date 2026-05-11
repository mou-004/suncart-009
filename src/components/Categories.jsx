import Link from "next/link";

const Categories = async ({ searchParams }) => {
  const res = await fetch("https://sun-cart-009.vercel.app/category.json");
  const categories = await res.json();

  const params = await searchParams;
  const activeCategory = params?.category;

  return (
    <div className="flex flex-wrap gap-3 mb-8 animate__animated animate__fadeInDown">
      <Link href="/products">
        <button
          className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 border-none 
            animate__animated hover:animate__pulse
            ${
              !activeCategory
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200 scale-105"
                : "bg-white text-base-content/60 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
            }`}
        >
          All Products
        </button>
      </Link>

      {categories.map((category) => {
        const categoryName = category.category.toLowerCase();
        const isSelected = activeCategory === categoryName;

        return (
          <Link key={category.id} href={`?category=${categoryName}`}>
            <button
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 border-none
                animate__animated animate__fadeIn animate__faster hover:animate__pulse
                ${
                  isSelected
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200 scale-105"
                    : "bg-white text-base-content/60 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
                }`}
            >
              {category.category}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;

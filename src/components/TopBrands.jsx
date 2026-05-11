import { getAllProducts } from "@/lib/data";

const TopBrands = async () => {
  const products = await getAllProducts();

  const brandData = Array.from(
    new Map(products.map((p) => [p.brand, p.category])).entries()
  )
    .slice(0, 4)
    .map(([name, category]) => ({ name, category }));

  return (
    /* Background: Soft, professional gradient from a warm cream to a light honey amber */
    <section className="bg-gradient-to-r from-[#fff1e6] to-[#ffeadb] py-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle organic glow for professional depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-orange-800/40 uppercase mb-2">
            The Collective
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">
            Top <span className="font-serif italic text-orange-600">Brands</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {brandData.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white border border-orange-100 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,193,123,0.15)] hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Refined Icon Container */}
                <div className="relative w-12 h-12 flex items-center justify-center mb-3">
                  <div className="absolute inset-0 bg-orange-50 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></div>
                  <span className="relative z-10 text-xl font-serif text-orange-600 group-hover:text-white transition-colors duration-300">
                    {brand.name.charAt(0)}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-800 tracking-tight leading-tight">
                  {brand.name}
                </h4>
                
                <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-400 group-hover:text-orange-500 transition-colors">
                  {brand.category}
                </p>

                {/* Elegant Minimalist Divider */}
                <div className="mt-5 h-[1px] w-8 bg-slate-100 group-hover:w-16 group-hover:bg-orange-200 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
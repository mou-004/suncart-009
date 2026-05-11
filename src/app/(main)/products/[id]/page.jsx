"use client";
import products from "@/data/data.json";
import categories from "@/data/category.json";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import {
  MdArrowBack,
  MdLocalShipping,
  MdLoop,
  MdVerified,
} from "react-icons/md";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const targetProduct = products.find((product) => product.id == id);

  if (!targetProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcf9f8]">
        <h1 className="text-2xl font-bold text-orange-500">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-[#fcf9f8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-start">
            <div className="animate__animated animate__backInLeft">
              <div className="grid">
                <div className="relative aspect-square rounded-[32px] overflow-hidden bg-amber-50/60 shadow-xl shadow-orange-100">
                  <Image
                    src={targetProduct.image}
                    alt={targetProduct.name}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                    priority
                  />

                  <div className="absolute top-4 right-4">
                    <span className="badge badge-md bg-amber-50 text-amber-700 border border-amber-200 font-semibold shadow-sm">
                      {targetProduct.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 animate__animated animate__fadeInUp">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500 animate__animated animate__fadeIn animate__delay-1s">
                {targetProduct.brand}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-base-content leading-tight">
                {targetProduct.name}
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 opacity-90">
                  <FaStar size={13} className="text-amber-400" />
                  <span className="text-xs font-semibold text-base-content/50 ml-1">
                    ({targetProduct.rating})
                  </span>
                </div>

                <span className="text-sm font-semibold text-base-content/60">
                  {targetProduct.rating} out of 5
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-orange-500">
                  ${targetProduct.price}
                </span>
              </div>

              <div className="divider my-0" />

              <p className="text-base text-base-content/60">
                {targetProduct.description}
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    targetProduct.stock < 15 ? "bg-red-400" : "bg-emerald-400"
                  }`}
                />

                <span
                  className={`text-sm font-semibold ${
                    targetProduct.stock < 15
                      ? "text-red-400"
                      : "text-emerald-500"
                  }`}
                >
                  {targetProduct.stock < 15
                    ? `Only ${targetProduct.stock} left in stock`
                    : `In Stock (${targetProduct.stock} available)`}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2 animate__animated animate__fadeInUp animate__delay-1s">
                <button className="btn btn-lg flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 rounded-full shadow-lg shadow-orange-200/50 hover:scale-[1.02] transition-transform duration-200">
                  Add to Cart
                </button>

                <button className="btn btn-lg flex-1 btn-outline border-orange-200 text-orange-500 hover:bg-orange-50 hover:border-orange-300 rounded-full transition-all duration-200">
                  Wishlist
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-2 animate__animated animate__fadeIn animate__delay-1s animate__faster">
                <div className="flex flex-col items-center gap-1.5 bg-white border border-orange-50 rounded-2xl py-3 px-2 text-center shadow-sm">
                  <span className="text-orange-400">
                    <MdLocalShipping size={18} />
                  </span>
                  <span className="text-xs font-semibold text-base-content/50">
                    Free Shipping
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1.5 bg-white border border-orange-50 rounded-2xl py-3 px-2 text-center shadow-sm">
                  <span className="text-orange-400">
                    <MdVerified size={18} />
                  </span>
                  <span className="text-xs font-semibold text-base-content/50">
                    Authentic
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1.5 bg-white border border-orange-50 rounded-2xl py-3 px-2 text-center shadow-sm">
                  <span className="text-orange-400">
                    <MdLoop size={18} />
                  </span>
                  <span className="text-xs font-semibold text-base-content/50">
                    Easy Returns
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:gap-3 transition-all duration-200"
                >
                  <MdArrowBack size={18} />
                  Back to all products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
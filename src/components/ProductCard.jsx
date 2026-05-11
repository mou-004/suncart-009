import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // Ensure product.image exists to avoid broken images
  const imageSrc = product.image || "/products/default.jpg";

  return (
    <div className="card bg-white border border-orange-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden group">
      <figure className="relative w-full h-80 bg-amber-50/60 overflow-hidden">
        <img
          src={imageSrc}   // must match public/products/<filename>
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-3 right-3 animate__animated animate__zoomIn animate__delay-0.9s">
          <span className="badge badge-sm bg-amber-50/90 backdrop-blur-sm text-amber-700 border border-amber-200 font-semibold shadow-sm">
            {product.category}
          </span>
        </div>
      </figure>

      <div className="card-body p-5 gap-3">
        <h3 className="font-bold text-base text-base-content leading-snug group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 opacity-90">
          <FaStar size={13} className="text-amber-400" />
          <span className="text-xs font-semibold text-base-content/50 ml-1">
            ({product.rating})
          </span>
        </div>

        <span className="text-xl font-extrabold text-orange-500">
          ${product.price}
        </span>

        <Link
          href={`/products/${product.id}`}
          className="btn btn-block bg-gradient-to-r from-orange-500 to-amber-400 text-white border-0 rounded-full shadow-md shadow-orange-200/50 hover:shadow-orange-300/60 transition-all duration-200 mt-1"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
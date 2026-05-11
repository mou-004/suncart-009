// import Image from "next/image";
// import Link from "next/link";

// const Banner = () => {
//   return (
//     <div className="bg-sky-50/40">
//       <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12">
//         <div className="md:col-span-6 order-2 md:order-1 flex flex-col gap-6">
//           <span className="badge badge-lg bg-sky-200 text-sky-900 border-0 font-semibold tracking-widest text-xs uppercase px-4 py-3 w-fit">
//             Hot Deals 🔥
//           </span>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content">
//             Summer Sale
//             <br />
//             <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
//               50% OFF
//             </span>
//           </h1>

//           <p className="text-lg leading-relaxed text-base-content/80 max-w-md">
//             Experience the ultimate Mediterranean escape with our curated
//             collection of luxury summer essentials. Radiant, effortless, and
//             premium.
//           </p>

//           <Link
//             href="/products"
//             className="btn btn-lg rounded-[20px] border-0 text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-300/40 hover:scale-[1.03] hover:shadow-orange-400/50 transition-all duration-200 px-8 w-fit"
//           >
//             Shop Now
//           </Link>
//         </div>

//         <div className="md:col-span-6 order-1 md:order-2 grid">
//           <div className="grid">
//             <div className="col-start-1 row-start-1 rounded-[40px] translate-x-4 translate-y-4 w-full h-full" />

//             <Image
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg1josN1iptz91AoClWFEHzmWNyz82c0_RhAGTO52QO0VIgKoXPW76DT9cmkhDQ50lxFrOVHN-ZrusgXIedmyHGixdmiggpRx0PUTLFpG5wc-Ph_7L12SVGtcawTKJpr6adrt5GlFpKivOLHNGK64lrAFhOfWGiMwMujhknJSUWiRIg0xCQj1RKuirVZmgaO8ZpAqMO3KtwhmUV05SKXpI35-IFbUc4KAXhqclZMQ9sr_UdJqamhqBpD6XWQcIq_ziCr0pugef-jU"
//               alt="A sophisticated summer lifestyle photograph of a woman wearing an elegant wide-brimmed straw hat and linen dress, lounging by a pristine turquoise infinity pool."
//               width={800}
//               height={1000}
//               className="col-start-1 row-start-1 w-full h-auto max-h-[600px] object-cover rounded-[40px] shadow-2xl shadow-orange-200/30"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Banner;

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-sky-50/40 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12">
        
        
        <div className="md:col-span-6 order-2 md:order-1 flex flex-col gap-6 animate__animated animate__fadeInLeft">
          
          <span className="badge badge-lg bg-sky-200 text-sky-900 border-0 font-semibold tracking-widest text-xs uppercase px-4 py-3 w-fit animate__animated animate__fadeInDown animate__delay-1s">
            Hot Deals 🔥
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content">
            Summer Sale
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              50% OFF
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-base-content/80 max-w-md">
            Experience the ultimate Mediterranean escape with our curated
            collection of luxury summer essentials. Radiant, effortless, and
            premium.
          </p>

          <Link
            href="/products"
            className="btn btn-lg rounded-[20px] border-0 text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-300/40 hover:scale-[1.05] transition-transform duration-200 px-8 w-fit animate__animated animate__fadeInUp animate__delay-1s"
          >
            Shop Now
          </Link>
        </div>

        
        <div className="md:col-span-6 order-1 md:order-2 grid animate__animated animate__fadeIn animate__slow">
          <div className="grid">
            <div className="col-start-1 row-start-1 rounded-[40px] translate-x-4 translate-y-4 w-full h-full bg-orange-100/50 animate__animated animate__pulse animate__infinite animate__slow" />

            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg1josN1iptz91AoClWFEHzmWNyz82c0_RhAGTO52QO0VIgKoXPW76DT9cmkhDQ50lxFrOVHN-ZrusgXIedmyHGixdmiggpRx0PUTLFpG5wc-Ph_7L12SVGtcawTKJpr6adrt5GlFpKivOLHNGK64lrAFhOfWGiMwMujhknJSUWiRIg0xCQj1RKuirVZmgaO8ZpAqMO3KtwhmUV05SKXpI35-IFbUc4KAXhqclZMQ9sr_UdJqamhqBpD6XWQcIq_ziCr0pugef-jU"
              alt="Sophisticated summer lifestyle"
              width={800}
              height={1000}
              priority
              className="col-start-1 row-start-1 w-full h-auto max-h-[600px] object-cover rounded-[40px] shadow-2xl shadow-orange-200/30 animate__animated animate__zoomIn"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdMail, MdPhone, MdSunny } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-50/40 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-1.5">
            <MdSunny className="text-amber-500 text-xl" />
            <a className="font-jakarta text-2xl font-bold tracking-tighter bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              SunCart
            </a>
          </div>
          <p className="text-sm leading-relaxed text-base-content/50 max-w-[220px]">
            Sun-drenched essentials for the discerning traveler. Quality
            craftsmanship for your best summer yet.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">
              Follow Our Journey
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="btn btn-sm btn-circle bg-white border border-orange-100 text-orange-400 shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaFacebook size={15} />
              </Link>
              <Link
                href="#"
                className="btn btn-sm btn-circle bg-white border border-orange-100 text-orange-400 shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaTwitter size={15} />
              </Link>
              <Link
                href="#"
                className="btn btn-sm btn-circle bg-white border border-orange-100 text-orange-400 shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaInstagram size={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-base-content/70">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Collections
            </li>
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Summer Edit
            </li>
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Lookbook
            </li>
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Gift Cards
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-base-content/70">
            Support
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              FAQs
            </li>
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Size Guide
            </li>
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Shipping & Returns
            </li>
            <li className="text-sm text-base-content/50 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block">
              Track My Order
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-base-content/70">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-sm text-base-content/50">
              <span className="text-orange-400 shrink-0">
                <MdMail size={15} />
              </span>
              hello@suncart.com
            </li>
            <li className="flex items-center gap-3 text-sm text-base-content/50">
              <span className="text-orange-400 shrink-0">
                <MdPhone size={15} />
              </span>
              +8801717777777
            </li>
            <li className="flex items-center gap-3 text-sm text-base-content/50">
              <span className="text-orange-400 shrink-0">
                <MdLocationOn size={15} />
              </span>
              Dhaka, Bangladesh
            </li>
          </ul>

          <div className="mt-2">
            <p className="text-xs font-semibold text-base-content/50 uppercase tracking-widest mb-2">
              Newsletter
            </p>
            <div className="join w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-sm join-item border border-orange-100 bg-white focus:outline-none focus:border-orange-300 w-full text-sm"
              />
              <button className="btn btn-sm join-item bg-orange-500 hover:bg-orange-600 text-white border-0">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-base-content/40">
          © 2026 SunCart Boutique. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-xs text-base-content/40 hover:text-orange-500 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs text-base-content/40 hover:text-orange-500 transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs text-base-content/40 hover:text-orange-500 transition-colors duration-200"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-6 flex justify-center gap-2"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full max-w-md px-5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button
        type="submit"
        className="px-5 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
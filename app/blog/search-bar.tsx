"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // Update the input value when it changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Optionally, submit the form and update the URL
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === "") {
      router.push(pathname);
      return;
    }
    router.push(`${pathname}?search=${encodeURIComponent(inputValue)}`);
  };

  // Initialize the input value with the current search parameter
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setInputValue(searchQuery);
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2 text-black"
        />
      </div>
      <div>
        <button type="submit" className="border px-1 rounded">
          Search
        </button>
      </div>
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  // Update the input value when it changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Optionally, submit the form and update the URL
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/dashboard?search=${encodeURIComponent(inputValue)}`);
  };

  // Initialize the input value with the current search parameter
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setInputValue(searchQuery);
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border border-gray-300 rounded-md p-2 text-black"
      />
      <button type="submit">Search</button>
      <p>Search: {inputValue}</p>
    </form>
  );
}

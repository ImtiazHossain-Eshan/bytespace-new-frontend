"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    setQuery("");
    router.push(
      value ? `/?q=${encodeURIComponent(value)}#courses` : "/#courses",
    );
  }

  return (
    <form className="hero-search" role="search" onSubmit={submit}>
      <label className="hero-search__field">
        <Search size={20} aria-hidden="true" />
        <span className="sr-only">Search courses</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Course, topic, creator"
          type="search"
        />
      </label>
      <button className="pill-button" type="submit">
        Search
      </button>
    </form>
  );
}

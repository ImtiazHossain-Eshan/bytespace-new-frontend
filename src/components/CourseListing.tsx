"use client";

import { Filter, ListFilter, Search, SlidersHorizontal } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CourseCard } from "./CourseCatalog";
import { categories, courses } from "@/data/site";

const listingCourses = [...courses, ...courses];

export function CourseListing() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const selectedCategory = params.get("category") ?? "Featured";
  const sort = params.get("sort") ?? "relevant";
  const page = Number(params.get("page") ?? "1");

  const filtered = useMemo(() => {
    const term = (params.get("q") ?? "").trim().toLowerCase();
    const matches = listingCourses.filter((course) => {
      const text =
        `${course.title} ${course.category} purepearl studio`.toLowerCase();
      const categoryMatch =
        selectedCategory === "Featured" || course.category === selectedCategory;
      return categoryMatch && (!term || text.includes(term));
    });
    return [...matches].sort((a, b) =>
      sort === "title" ? a.title.localeCompare(b.title) : 0,
    );
  }, [params, selectedCategory, sort]);

  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), pageCount);
  const visible = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function update(values: Record<string, string | null>) {
    const next = new URLSearchParams(params.toString());
    Object.entries(values).forEach(([key, value]) => {
      if (value) next.set(key, value);
      else next.delete(key);
    });
    next.delete("page");
    router.push(`${pathname}?${next.toString()}`);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    update({ q: query.trim() || null });
  }

  return (
    <main className="listing-page">
      <section className="listing-hero blue-grid">
        <div className="page-container">
          <h1>Find Your Next Course</h1>
          <form className="listing-search" role="search" onSubmit={submit}>
            <label>
              <Search size={19} aria-hidden="true" />
              <span className="sr-only">Search courses</span>
              <input
                type="search"
                placeholder="Search courses, topics, or creators"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <select
              aria-label="Course category"
              value={selectedCategory}
              onChange={(event) => update({ category: event.target.value })}
            >
              <option value="Featured">Courses</option>
              {categories
                .filter((category) => category !== "Featured")
                .map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
            </select>
            <button className="pill-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
      <section
        className="listing-results page-container"
        aria-labelledby="listing-heading"
      >
        <div className="listing-toolbar">
          <h2 id="listing-heading" className="sr-only">
            Course results
          </h2>
          <div className="listing-filter-group" aria-label="Course filters">
            <label className="listing-select">
              <Filter size={17} aria-hidden="true" />
              <span>Category</span>
              <select
                aria-label="Filter by category"
                value={selectedCategory}
                onChange={(event) => update({ category: event.target.value })}
              >
                <option value="Featured">All categories</option>
                {categories
                  .filter((category) => category !== "Featured")
                  .map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </label>
            <label className="listing-select">
              <SlidersHorizontal size={17} aria-hidden="true" />
              <span>Level</span>
              <select aria-label="Filter by level" defaultValue="all">
                <option value="all">All levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
              </select>
            </label>
          </div>
          <label className="listing-sort">
            <ListFilter size={17} aria-hidden="true" />
            <span className="sr-only">Sort courses</span>
            <select
              aria-label="Sort courses"
              value={sort}
              onChange={(event) => update({ sort: event.target.value })}
            >
              <option value="relevant">Most relevant</option>
              <option value="title">Title A–Z</option>
            </select>
          </label>
        </div>
        {params.get("q") && (
          <p className="listing-feedback">
            Results for “{params.get("q")}” · {filtered.length} courses
            <button type="button" onClick={() => update({ q: null })}>
              Clear
            </button>
          </p>
        )}
        {visible.length ? (
          <div className="course-grid listing-grid">
            {visible.map((course, index) => (
              <CourseCard key={`${course.slug}-${index}`} course={course} />
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <h3>No courses found</h3>
            <p>Try a different search or category.</p>
            <button
              className="pill-button"
              type="button"
              onClick={() => update({ q: null, category: null })}
            >
              Browse all courses
            </button>
          </div>
        )}
        <nav className="pagination" aria-label="Course pages">
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() =>
              router.push(
                `${pathname}?${new URLSearchParams({ ...Object.fromEntries(params), page: String(currentPage - 1) })}`,
              )
            }
          >
            ←
          </button>
          {Array.from(
            { length: Math.max(3, pageCount) },
            (_, index) => index + 1,
          ).map((number) => (
            <button
              type="button"
              className={number === currentPage ? "pagination__active" : ""}
              key={number}
              aria-current={number === currentPage ? "page" : undefined}
              onClick={() =>
                router.push(
                  `${pathname}?${new URLSearchParams({ ...Object.fromEntries(params), page: String(number) })}`,
                )
              }
            >
              {number}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage === pageCount}
            onClick={() =>
              router.push(
                `${pathname}?${new URLSearchParams({ ...Object.fromEntries(params), page: String(currentPage + 1) })}`,
              )
            }
          >
            →
          </button>
        </nav>
      </section>
    </main>
  );
}

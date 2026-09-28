"use client";

import { BarChart3, Star } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AvatarStack } from "./AvatarStack";
import { categories, courses, type Course } from "@/data/site";

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-card__image">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <div
          className="course-card__facts"
          aria-label="17 lessons, 2 hours 16 minutes, 59 comments"
        >
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className="course-card__title-row">
        <h3 title={course.title}>{course.title}</h3>
        <span className="course-card__rating">
          4.5 <Star size={17} fill="currentColor" aria-hidden="true" />
        </span>
      </div>
      <p className="course-card__author">
        by <span>purepearl studio</span>
      </p>
      <div className="course-card__meta">
        <span className="course-card__level">
          <BarChart3 size={15} fill="currentColor" aria-hidden="true" />
          Beginner
        </span>
        <AvatarStack />
      </div>
      <p className="course-card__price">
        <strong>$25</strong>
        <span>/lifetime</span>
      </p>
    </article>
  );
}

export function CourseCatalog() {
  const [moreOpen, setMoreOpen] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get("q")?.trim() ?? "";
  const selected = params.get("category") ?? "Featured";
  const filtered = courses.filter((course) => {
    if (query)
      return `${course.title} ${course.category} purepearl studio`
        .toLowerCase()
        .includes(query.toLowerCase());
    if (selected === "Featured") return true;
    if (selected === "Design")
      return (
        course.category === "UI/UX Design" ||
        course.category === "Digital Illustration"
      );
    if (selected === "IT & Software") return course.category === "Data Science";
    if (selected === "Finance")
      return course.slug === "mastering-money-management";
    return course.category === selected;
  });

  function select(category: string) {
    router.push(
      category === "Featured"
        ? "/#courses"
        : `/?category=${encodeURIComponent(category)}#courses`,
    );
  }

  return (
    <section
      className="catalog-section"
      id="courses"
      aria-labelledby="courses-heading"
    >
      <div className="page-container">
        <div className="section-intro">
          <h2 id="courses-heading">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p>
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>
        <div
          className="category-filters"
          role="group"
          aria-label="Filter featured courses by topic"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-chip ${!query && selected === category ? "category-chip--active" : ""}`}
              type="button"
              onClick={() => select(category)}
              aria-pressed={!query && selected === category}
            >
              {category}
            </button>
          ))}
          {moreOpen &&
            ["Business", "IT & Software", "Finance"].map((category) => (
              <button
                key={category}
                className={`category-chip ${!query && selected === category ? "category-chip--active" : ""}`}
                type="button"
                onClick={() => select(category)}
                aria-pressed={!query && selected === category}
              >
                {category}
              </button>
            ))}
          <button
            className="category-chip category-chip--more"
            type="button"
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen(!moreOpen)}
          >
            {moreOpen ? "− Less" : "+ More"}
          </button>
        </div>
        {query && (
          <p className="catalog-feedback">
            Results for “{query}”{" "}
            <button type="button" onClick={() => select("Featured")}>
              Clear search
            </button>
          </p>
        )}
        {filtered.length ? (
          <div className="course-grid">
            {filtered.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="catalog-empty" role="status">
            <h3>No featured courses found</h3>
            <p>Try another topic or browse all featured courses.</p>
            <button
              className="pill-button"
              type="button"
              onClick={() => select("Featured")}
            >
              Show featured courses
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

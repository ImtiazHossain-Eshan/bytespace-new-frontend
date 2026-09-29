"use client";

import { BarChart3, Filter, ListFilter, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AvatarStack } from "./AvatarStack";
import { courses } from "@/data/site";

export function CreatorProfile() {
  const [following, setFollowing] = useState(false);
  const [sort, setSort] = useState("relevant");
  const creatorCourses = [...courses].sort((a, b) =>
    sort === "title" ? a.title.localeCompare(b.title) : 0,
  );
  return (
    <main className="creator-page">
      <section className="creator-hero blue-grid">
        <div className="page-container">
          <div className="creator-heading">
            <Image
              src="/assets/creator-purepearl.webp"
              alt="PurePearl Studio"
              width={96}
              height={96}
            />
            <div>
              <h1>
                PurePearl Studio <span>Creator</span>
              </h1>
              <p>Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="creator-bio">
            Welcome to the creative world of [Creator&apos;s Name]. Here,
            you&apos;ll discover the passion, expertise, and inspiration that
            drive my creative journey. Let&apos;s explore and learn together!
            <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="creator-actions">
            <div>
              <span>
                <b>3</b> Products
              </span>
              <span>
                <b>12</b> Followers
              </span>
            </div>
            <button
              className="pill-button"
              type="button"
              onClick={() => setFollowing(!following)}
            >
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>
      <section className="creator-courses page-container">
        <div className="creator-toolbar">
          <div>
            <button type="button">
              <Filter size={17} /> Filter
            </button>
            <button type="button">
              <BarChart3 size={17} /> Level
            </button>
            <button type="button">
              <Users size={17} /> Category
            </button>
          </div>
          <label>
            <ListFilter size={17} />
            <span className="sr-only">Sort creator courses</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="relevant">Most relevant</option>
              <option value="title">Title A–Z</option>
            </select>
          </label>
        </div>
        <div className="course-grid">
          {creatorCourses.map((course) => (
            <div key={course.slug}>
              <Link
                className="creator-course-link"
                href={`/courses/${course.slug}`}
              >
                <div className="creator-course-image">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <div>
                    <span>17 Lessons</span>
                    <span>2 hours 16 mins</span>
                    <span>59 Comments</span>
                  </div>
                </div>
                <h2>{course.title}</h2>
                <p>
                  by <span>purepearl studio</span>
                </p>
                <div className="creator-course-meta">
                  <span>
                    <BarChart3 size={14} /> Beginner
                  </span>
                  <AvatarStack />
                </div>
                <strong>
                  $25<small>/lifetime</small>
                </strong>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import {
  Award,
  BarChart3,
  Check,
  FileText,
  Share2,
  Star,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { courses } from "@/data/site";

type DetailTab = "about" | "lessons" | "reviews";

const modules = [
  [
    "Module 1: Introduction to Digital Assets",
    "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  ],
  [
    "Module 2: Design Principles for Impact",
    "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  ],
  [
    "Module 4: User-Centric Design Strategies",
    "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  ],
  [
    "Module 5: Interactive Media and Engagement",
    "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master immersive digital experiences.",
  ],
  [
    "Module 6: Project Showcase and Critique",
    "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.'",
  ],
  [
    "Module 7: Optimizing Digital Assets for Various Platforms",
    "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure accessibility across diverse digital landscapes.",
  ],
];

const reviews = [
  [
    "PurePearl Studio",
    "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    "/assets/creator-purepearl.webp",
  ],
  [
    "Albert Flores",
    "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
    "/assets/alex.webp",
  ],
  [
    "Cody Fisher",
    "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.",
    "/assets/james.webp",
  ],
  [
    "Brooklyn Simmons",
    "Every module made a complex topic approachable, with practical examples I could use immediately.",
    "/assets/sarah.webp",
  ],
];

export function CourseDetail({ slug }: { slug: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [shared, setShared] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("all");
  const course = courses.find((item) => item.slug === slug) ?? courses[1];
  const tab = (params.get("tab") as DetailTab | null) ?? "about";

  function setTab(next: DetailTab) {
    router.push(`/courses/${course.slug}?tab=${next}`);
  }

  async function share() {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title: course.title, url });
    else {
      await navigator.clipboard?.writeText(url);
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    }
  }

  return (
    <main className="course-detail">
      <section className="detail-hero blue-grid">
        <div className="page-container">
          <div className="detail-heading">
            <div>
              <h1>
                {course.slug === "build-digital-asset"
                  ? "Build Digital Asset: A Comprehensive Guide"
                  : course.title}
              </h1>
              <p>
                {course.slug === "build-digital-asset"
                  ? "Unlock the Power of Digital Creation with Expert Guidance"
                  : "Learn from experienced creators with practical, self-paced lessons."}
              </p>
              <p className="detail-author">
                by{" "}
                <Link href="/creators/purepearl-studio">purepearl studio</Link>
              </p>
              <div className="detail-badges">
                <span>
                  <BarChart3 size={17} /> Intermediate
                </span>
                <span>
                  <Star size={17} fill="currentColor" /> 4.8 (172 reviews)
                </span>
                <span>
                  <Users size={17} /> 199 Students
                </span>
              </div>
            </div>
            <button
              className="pill-button detail-share"
              type="button"
              onClick={share}
            >
              <Share2 size={18} /> {shared ? "Copied" : "Share"}
            </button>
          </div>
          <div className="detail-layout">
            <button
              className="detail-video"
              type="button"
              onClick={() => setPreviewOpen(true)}
              aria-label="Play course preview"
            >
              <Image
                src="/assets/detail-poster.webp"
                alt="Course preview"
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                priority
              />
            </button>
            <aside className="detail-sidebar">
              <h2>112 Lessons (24 hours)</h2>
              {[
                "Introduction to Digital Assets",
                "Design Principles for Impacts",
                "Advanced Techniques in Digital Creation",
              ].map((lesson, index) => (
                <div className="lesson-preview" key={lesson}>
                  <span>0{index + 1}</span>
                  <strong>{lesson}</strong>
                  <em>{["12 mins", "21 mins", "16 mins"][index]}</em>
                </div>
              ))}
              <p className="more-videos">99 more videos</p>
              <p>
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>
              <p className="detail-price">
                <strong>$25</strong>/lifetime
              </p>
              <Link
                className="pill-button detail-enroll"
                href={`/signup?course=${course.slug}`}
              >
                Enroll Now
              </Link>
              <div className="includes">
                <h3>This course include</h3>
                <p>
                  <FileText size={18} /> Learning Resources
                </p>
                <p>
                  <Video size={18} /> Quality Lesson Videos
                </p>
                <p>
                  <Award size={18} /> Certificate of Completion
                </p>
                <p>
                  <Users size={18} /> Private Consultation
                </p>
              </div>
              <div className="mini-creator">
                <Image
                  src="/assets/creator-purepearl.webp"
                  alt=""
                  width={52}
                  height={52}
                />
                <div>
                  <strong>PurePearl Studio</strong>
                  <span>Professional Creator</span>
                </div>
              </div>
              <p>
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>
              <Link
                className="outline-button"
                href="/creators/purepearl-studio"
              >
                See Full Profile
              </Link>
            </aside>
          </div>
        </div>
      </section>
      <section className="detail-content page-container">
        <nav className="detail-tabs" aria-label="Course details">
          {(["about", "lessons", "reviews"] as DetailTab[]).map((item) => (
            <button
              className={tab === item ? "detail-tab--active" : ""}
              type="button"
              key={item}
              onClick={() => setTab(item)}
            >
              {item === "lessons"
                ? "Lesson"
                : item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
        {tab === "about" && <AboutTab />}
        {tab === "lessons" && <LessonsTab />}
        {tab === "reviews" && (
          <ReviewsTab
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
          />
        )}
      </section>
      {previewOpen && (
        <div
          className="dialog-backdrop"
          onMouseDown={() => setPreviewOpen(false)}
        >
          <section
            className="preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Course preview"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="dialog-close"
              onClick={() => setPreviewOpen(false)}
              aria-label="Close preview"
            >
              ×
            </button>
            <Image
              src="/assets/detail-poster.webp"
              alt="Course preview"
              width={720}
              height={479}
            />
            <h2>Course preview</h2>
            <p>
              This preview image is available in the assessment design. Full
              lesson video becomes available after enrollment.
            </p>
          </section>
        </div>
      )}
    </main>
  );
}

function AboutTab() {
  return (
    <div className="detail-tab-content">
      <h2>Description</h2>
      <p>
        Embark on an enlightening exploration into the world of digital creation
        with our comprehensive course, “Build Digital Assets: A Comprehensive
        Guide.” This transformative learning experience invites you to delve
        deep into the intricacies of crafting impactful digital content.
      </p>
      <p>
        In the initial modules, you&apos;ll establish a solid foundation by
        immersing yourself in the fundamental concepts that form the backbone of
        digital asset creation. Understand the elements that constitute
        compelling digital content and gain proficiency in leveraging them to
        communicate effectively.
      </p>
      <p>
        As you progress, you&apos;ll ascend to higher levels of expertise,
        delving into the design principles that drive impactful creations.
        Uncover the secrets behind effective visual communication, exploring
        color theory, typography, and layout strategies.
      </p>
      <h2>Sneak Peak</h2>
      <div className="sneak-grid">
        {[
          "/assets/course-1.webp",
          "/assets/course-2.webp",
          "/assets/course-3.webp",
          "/assets/course-4.webp",
        ].map((image) => (
          <Image
            key={image}
            src={image}
            alt="Course lesson preview"
            width={160}
            height={100}
          />
        ))}
      </div>
      <h2>Key Points</h2>
      <ul className="key-points">
        {[
          "Foundational Concepts",
          "Design Principles Mastery",
          "Advanced Techniques in Digital Creation",
          "Project Showcase and Critique",
          "Optimizing for Various Platforms",
          "Digital Asset Management Best Practices",
          "Monetization Strategies",
          "Capstone Project: Building Your Portfolio",
        ].map((point) => (
          <li key={point}>
            <Check size={18} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LessonsTab() {
  return (
    <div className="detail-tab-content">
      <h2>Explore the Modules</h2>
      <p>
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>
      <h2>Lesson List</h2>
      <div className="module-list">
        {modules.map(([title, description]) => (
          <article key={title}>
            <span>
              <Video size={28} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
      <h2>Lesson Content</h2>
      <p>
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>
      <h2>Lesson Progress Tracking</h2>
      <p>
        Witness your growth as you complete lessons, with an intuitive progress
        tracker guiding you through your learning journey.
      </p>
      <div className="progress-card">
        <span>Learning Progress</span>
        <strong>55%</strong>
        <div>
          <i />
        </div>
      </div>
    </div>
  );
}

function ReviewsTab({
  ratingFilter,
  setRatingFilter,
}: {
  ratingFilter: string;
  setRatingFilter: (value: string) => void;
}) {
  const visibleIndexes: Record<string, number[]> = {
    all: [0, 1, 2, 3],
    "5": [0, 1],
    "4": [2],
    "3": [3],
    "2": [],
    "1": [],
  };
  const visibleReviews = reviews.filter((_, index) =>
    visibleIndexes[ratingFilter]?.includes(index),
  );
  return (
    <div className="detail-tab-content">
      <h2>What Learners Are Saying</h2>
      <p>
        Discover what our learners have to say about their experience with
        “Build Digital Assets: A Comprehensive Guide.” Read reviews and ratings
        from individuals who have embarked on the journey of mastering digital
        asset creation.
      </p>
      <div className="rating-summary">
        <div>
          <span>Ratings</span>
          <strong>4.7</strong>
        </div>
        <div className="rating-bars">
          {["720", "120", "21", "12", "16"].map((count, index) => (
            <p key={count}>
              <i style={{ width: `${[92, 40, 10, 4, 6][index]}%` }} />
              <span>★★★★★</span>
              <b>{count}</b>
            </p>
          ))}
        </div>
      </div>
      <h2>Individual Reviews:</h2>
      <div className="review-filters">
        {[
          ["all", "All rating"],
          ["5", "★ 5"],
          ["4", "★ 4"],
          ["3", "★ 3"],
          ["2", "★ 2"],
          ["1", "★ 1"],
        ].map(([value, filter]) => (
          <button
            className={ratingFilter === value ? "active" : ""}
            type="button"
            key={filter}
            onClick={() => setRatingFilter(value)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="review-list">
        {visibleReviews.length ? (
          visibleReviews.map(([name, quote, image]) => (
            <article key={name}>
              <div className="review-head">
                <Image src={image} alt="" width={50} height={50} />
                <div>
                  <strong>{name}</strong>
                  <span>UI/UX Designer</span>
                </div>
                <time>a year ago</time>
              </div>
              <p className="review-stars">★★★★★</p>
              <p>“{quote}”</p>
            </article>
          ))
        ) : (
          <p className="catalog-empty">
            No reviews at this rating in this sample.
          </p>
        )}
      </div>
    </div>
  );
}

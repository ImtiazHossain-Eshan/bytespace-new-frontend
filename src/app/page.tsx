import {
  BarChart3,
  BriefcaseBusiness,
  Camera,
  CodeXml,
  Laptop,
  Megaphone,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { AvatarStack } from "@/components/AvatarStack";
import { CourseCatalog } from "@/components/CourseCatalog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSearch } from "@/components/HeroSearch";
import { learningPaths, testimonials } from "@/data/site";
import "./home.css";

const pathIcons = [
  PenTool,
  CodeXml,
  Laptop,
  BriefcaseBusiness,
  Megaphone,
  Camera,
];
const pathFilters = [
  "Design",
  "Web Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
];

function Hero() {
  return (
    <section className="hero blue-grid" aria-labelledby="hero-heading">
      <Header />
      <div className="hero__content page-container">
        <h1 id="hero-heading">
          Get Access to Hundreds
          <br /> Courses Available
        </h1>
        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <HeroSearch />
      </div>
      <div className="hero__art" aria-hidden="true">
        <div className="hero__lime-arc" />
        <Image
          className="hero__student"
          src="/assets/hero-student.webp"
          alt=""
          width={516}
          height={483}
          priority
        />
        <Image
          className="hero__squiggle-left"
          src="/assets/squiggle-lime.webp"
          alt=""
          width={250}
          height={250}
        />
        <Image
          className="hero__squiggle-small"
          src="/assets/squiggle-white.webp"
          alt=""
          width={150}
          height={150}
        />
        <Image
          className="hero__ring"
          src="/assets/ring-white.webp"
          alt=""
          width={320}
          height={320}
        />
        <Image
          className="hero__triangle"
          src="/assets/triangle-white.webp"
          alt=""
          width={145}
          height={145}
        />
        <Image
          className="hero__squiggle-right"
          src="/assets/squiggle-white.webp"
          alt=""
          width={230}
          height={230}
        />
        <div className="hero__shape-right" />
        <div className="hero-float hero-float--course">
          <strong>UI/UX Design</strong>
          <small>200 Courses&nbsp; • &nbsp;1000+ Students</small>
        </div>
        <div className="hero-float hero-float--progress">
          <strong>Learning Progress</strong>
          <b>55%</b>
          <span />
        </div>
        <div className="hero-float hero-float--students">
          <strong>Happy Students</strong>
          <small>
            4.5 (240) <span className="lime-star">★</span>
          </small>
          <AvatarStack />
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <div className="logo-strip" aria-label="Learning partners">
      <div className="page-container logo-strip__inner">
        {["◉", "✺", "ϟ", "✿", "◍"].map((symbol, index) => (
          <span key={index}>
            <b aria-hidden="true">{symbol}</b> Logoipsum
          </span>
        ))}
      </div>
    </div>
  );
}

function LearningPaths() {
  return (
    <section
      className="paths-section"
      id="paths"
      aria-labelledby="paths-heading"
    >
      <div className="page-container">
        <div className="section-intro">
          <h2 id="paths-heading">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p>
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>
        <div className="path-grid">
          {learningPaths.map((path, index) => {
            const Icon = pathIcons[index];
            return (
              <Link
                className="path-card"
                key={path}
                href={`/?category=${encodeURIComponent(pathFilters[index])}#courses`}
              >
                <span>
                  <Icon size={31} strokeWidth={2.4} aria-hidden="true" />
                </span>
                {path}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PromoCourseCard() {
  return (
    <div className="promo-course">
      <div className="promo-course__image">
        <Image src="/assets/course-1.webp" alt="" fill sizes="360px" />
        <span>17 Lessons</span>
        <span>2 hours 16 mins</span>
      </div>
      <strong>Learn Figma from Basic</strong>
      <small>
        by <span>purepearl studio</span>
      </small>
      <p>
        <BarChart3 size={14} /> Beginner <AvatarStack />
      </p>
      <b>
        $25<small>/lifetime</small>
      </b>
    </div>
  );
}

function Growth() {
  return (
    <section
      className="growth-section"
      aria-label="How ByteSpace helps learners and creators"
    >
      <div className="page-container">
        <div className="growth-row growth-row--student">
          <div className="growth-copy">
            <h2>
              Your Path to Professional
              <br /> Growth Starts Here!
            </h2>
            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="growth-stats">
              <span>
                <strong>12K</strong>Students
              </span>
              <span>
                <strong>70+</strong>Courses
              </span>
              <span>
                <strong>16</strong>Creators
              </span>
            </div>
          </div>
          <div
            className="growth-visual growth-visual--student"
            aria-hidden="true"
          >
            <PromoCourseCard />
            <Image
              className="growth-visual__person"
              src="/assets/growth-student.webp"
              alt=""
              width={516}
              height={483}
            />
            <Image
              className="growth-visual__squiggle"
              src="/assets/squiggle-lime.webp"
              alt=""
              width={200}
              height={200}
            />
            <div className="growth-progress">
              <strong>Learning Progress</strong>
              <b>55%</b>
              <span />
            </div>
          </div>
        </div>
        <div className="growth-row growth-row--creator" id="creators">
          <div
            className="growth-visual growth-visual--creator"
            aria-hidden="true"
          >
            <div className="revenue-card revenue-card--top">
              Total Revenue <small>July 1-28</small>
              <strong>$120.29</strong>
              <i />
            </div>
            <div className="revenue-card revenue-card--bottom">
              Year to Date <small>2023</small>
              <strong>$1,200.38</strong>
              <em>+12$</em>
            </div>
            <Image
              className="growth-visual__woman"
              src="/assets/creator.webp"
              alt=""
              width={500}
              height={500}
            />
            <Image
              className="growth-visual__squiggle"
              src="/assets/squiggle-lime.webp"
              alt=""
              width={180}
              height={180}
            />
            <div className="growth-happy">
              <strong>Happy Students</strong>
              <small>
                4.5 (240) <span className="lime-star">★</span>
              </small>
              <AvatarStack />
            </div>
          </div>
          <div className="growth-copy">
            <h2>
              Create &amp; Manage
              <br /> Courses Easily.
            </h2>
            <p>
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul>
              <li>Share Your Expertise</li>
              <li>Monetize Your Passion</li>
              <li>Flexibility and Autonomy</li>
              <li>Build a Community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorCta() {
  return (
    <section
      className="creator-cta blue-grid"
      aria-labelledby="creator-cta-heading"
    >
      <div className="page-container">
        <h2 id="creator-cta-heading">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>
        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link className="pill-button" href="/signup">
          Join as Creator
        </Link>
      </div>
      <Image
        className="creator-cta__squiggle creator-cta__squiggle--left"
        src="/assets/squiggle-lime.webp"
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="creator-cta__ring"
        src="/assets/ring-lime.webp"
        alt=""
        width={300}
        height={300}
      />
      <Image
        className="creator-cta__triangle"
        src="/assets/triangle-lime.webp"
        alt=""
        width={180}
        height={180}
      />
      <Image
        className="creator-cta__squiggle creator-cta__squiggle--right"
        src="/assets/squiggle-lime.webp"
        alt=""
        width={230}
        height={230}
      />
    </section>
  );
}

function Testimonials() {
  return (
    <section
      className="testimonials-section"
      id="community"
      aria-labelledby="testimonials-heading"
    >
      <div className="page-container">
        <div className="testimonials-heading">
          <h2 id="testimonials-heading">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((person) => (
            <figure className="testimonial-card" key={person.name}>
              <Image src={person.image} alt="" width={80} height={80} />
              <figcaption>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </figcaption>
              <blockquote>“{person.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <LogoStrip />
        <Suspense
          fallback={<div className="catalog-skeleton" aria-hidden="true" />}
        >
          <CourseCatalog />
        </Suspense>
        <LearningPaths />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

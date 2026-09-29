import { Suspense } from "react";
import { CourseListing } from "@/components/CourseListing";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "../catalog.css";

export default function CoursesPage() {
  return (
    <>
      <div className="listing-shell">
        <Header />
        <Suspense
          fallback={<div className="catalog-skeleton" aria-hidden="true" />}
        >
          <CourseListing />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

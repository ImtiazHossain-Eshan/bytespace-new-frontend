import { Suspense } from "react";
import { CourseDetail } from "@/components/CourseDetail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "../../detail.css";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <div className="detail-shell">
        <Header />
        <Suspense
          fallback={<div className="catalog-skeleton" aria-hidden="true" />}
        >
          <CourseDetail slug={slug} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./not-found.css";

export default function NotFound() {
  return (
    <>
      <main className="not-found blue-grid">
        <Header />
        <div className="not-found__content page-container">
          <div className="not-found__number">404</div>
          <h1>
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h1>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <Link className="pill-button" href="/">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

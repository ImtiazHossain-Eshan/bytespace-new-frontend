import { CreatorProfile } from "@/components/CreatorProfile";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "../creator.css";

export default function CreatorsPage() {
  return (
    <>
      <div className="creator-shell">
        <Header />
        <CreatorProfile />
      </div>
      <Footer />
    </>
  );
}

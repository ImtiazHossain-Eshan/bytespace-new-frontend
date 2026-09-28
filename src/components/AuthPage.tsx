import Image from "next/image";
import { AvatarStack } from "./AvatarStack";
import { AuthForm } from "./AuthForm";
import { Logo } from "./Logo";

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  return (
    <main className="auth-page blue-grid">
      <div className="auth-layout page-container">
        <aside className="auth-story">
          <Logo compact light />
          <div className="auth-story__copy">
            <h1>{signup ? "Sign up and come in" : "Sign in with ease"}</h1>
            <p>
              {signup
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>
          </div>
          <div className="auth-art" aria-hidden="true">
            <div className="auth-art__card auth-art__card--back">
              <Image src="/assets/course-2.webp" alt="" fill sizes="300px" />
              <strong>Build Digital Asset</strong>
              <small>by purepearl studio</small>
            </div>
            <div className="auth-art__card auth-art__card--front">
              <div className="auth-art__image">
                <Image src="/assets/course-3.webp" alt="" fill sizes="360px" />
              </div>
              <strong>the Power of Big Data</strong>
              <small>by purepearl studio</small>
              <AvatarStack />
              <b>
                $25<small>/lifetime</small>
              </b>
            </div>
            <Image
              className="auth-art__ring"
              src="/assets/ring-lime.webp"
              alt=""
              width={140}
              height={140}
            />
            <Image
              className="auth-art__triangle"
              src="/assets/triangle-lime.webp"
              alt=""
              width={180}
              height={180}
            />
            <Image
              className="auth-art__squiggle"
              src="/assets/squiggle-white.webp"
              alt=""
              width={160}
              height={160}
            />
            <div className="auth-art__students">
              <strong>Happy Students</strong>
              <small>
                4.5 (240) <span className="lime-star">★</span>
              </small>
              <AvatarStack dark />
            </div>
          </div>
        </aside>
        <section className="auth-panel" aria-labelledby="auth-title">
          <div className="auth-panel__intro">
            <span>{signup ? "Create an Account" : "Sign In"}</span>
            <h2 id="auth-title">
              {signup ? (
                <>
                  Welcome to
                  <br />
                  ByteSpace
                </>
              ) : (
                "Welcome Back"
              )}
            </h2>
          </div>
          <AuthForm mode={mode} />
        </section>
      </div>
    </main>
  );
}

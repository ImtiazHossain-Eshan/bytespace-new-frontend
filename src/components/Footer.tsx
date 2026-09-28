"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { validateEmail } from "@/lib/validation";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const cookieTrigger = useRef<HTMLButtonElement>(null);
  const cookieClose = useRef<HTMLButtonElement>(null);

  const closeCookies = useCallback(() => {
    setCookiesOpen(false);
    cookieTrigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!cookiesOpen) return;
    cookieClose.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeCookies();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [cookiesOpen, closeCookies]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const error = validateEmail(email);
    setMessage(
      error ??
        "Newsletter signup is not connected in this frontend assessment. Your address was not sent.",
    );
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-newsletter">
            <Logo />
            <p>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form onSubmit={submit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby={message ? "newsletter-status" : undefined}
              />
              <button className="pill-button" type="submit">
                Search
              </button>
            </form>
            {message && (
              <p className="footer-status" id="newsletter-status" role="status">
                {message}
              </p>
            )}
            <small>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </small>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <div>
              <h2 className="sr-only">Browse</h2>
              <Link href="/#courses">Featured Courses</Link>
              <Link href="/#paths">Featured Categories</Link>
              <Link href="/?category=Business#courses">Business</Link>
              <Link href="/?category=IT%20%26%20Software#courses">IT</Link>
              <Link href="/?category=Design#courses">Design</Link>
            </div>
            <div>
              <h2 className="sr-only">Topics</h2>
              <Link href="/?category=Web%20Development#courses">
                Development
              </Link>
              <Link href="/?category=Marketing#courses">Marketing</Link>
              <Link href="/?category=Photography#courses">Photography</Link>
              <Link href="/?category=Finance#courses">Finance</Link>
              <Link href="/?category=Sport#courses">Sport</Link>
            </div>
            <div>
              <h2 className="sr-only">Platform</h2>
              <Link href="/#creators">Become a Creator</Link>
              <Link href="/#creators">Affiliate Program</Link>
              <Link href="mailto:hello@doin.tech">Contact</Link>
              <Link href="/#footer">Help</Link>
              <Link href="/#community">About</Link>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              ref={cookieTrigger}
              type="button"
              onClick={() => setCookiesOpen(true)}
            >
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
      {cookiesOpen && (
        <div className="dialog-backdrop" onMouseDown={closeCookies}>
          <section
            className="small-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie settings"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2>Cookie settings</h2>
            <p>
              This frontend assessment does not set optional tracking cookies.
            </p>
            <button
              ref={cookieClose}
              className="pill-button"
              type="button"
              onClick={closeCookies}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </footer>
  );
}

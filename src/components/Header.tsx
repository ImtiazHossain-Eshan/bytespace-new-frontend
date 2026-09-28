"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const bagButton = useRef<HTMLButtonElement>(null);
  const bagCloseButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (bagOpen) bagCloseButton.current?.focus();
  }, [bagOpen]);

  useEffect(() => {
    if (!open && !bagOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (bagOpen) {
        setBagOpen(false);
        bagButton.current?.focus();
      } else {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, bagOpen]);

  function closeBag() {
    setBagOpen(false);
    bagButton.current?.focus();
  }

  return (
    <header className="site-header">
      <div className="site-header__inner page-container">
        <Logo light />
        <nav
          className={`site-nav ${open ? "site-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/#courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/#creators" onClick={() => setOpen(false)}>
            Creators
          </Link>
          <div className="site-nav__mobile-actions">
            <Link href="/login" onClick={() => setOpen(false)}>
              Sign In
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)}>
              Join Us
            </Link>
          </div>
        </nav>
        <div className="site-header__actions">
          <Link href="/login">Sign In</Link>
          <Link href="/signup">Join Us</Link>
          <button
            ref={bagButton}
            className="icon-button"
            type="button"
            aria-label="Open your bag"
            onClick={() => setBagOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
          </button>
        </div>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {bagOpen && (
        <div className="dialog-backdrop" onMouseDown={closeBag}>
          <section
            className="small-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Your bag"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={bagCloseButton}
              className="dialog-close"
              type="button"
              aria-label="Close bag"
              onClick={closeBag}
            >
              <X size={20} />
            </button>
            <ShoppingBag size={30} aria-hidden="true" />
            <h2>Your bag is empty</h2>
            <p>
              Explore the featured courses to find something you would like to
              learn.
            </p>
            <Link className="pill-button" href="/#courses" onClick={closeBag}>
              Browse courses
            </Link>
          </section>
        </div>
      )}
    </header>
  );
}

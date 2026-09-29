"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/lib/validation";

type Mode = "login" | "signup";
type Errors = { name?: string; email?: string; password?: string };

export function AuthForm({ mode }: { mode: Mode }) {
  const signup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {
      ...(signup ? { name: validateName(name) ?? undefined } : {}),
      email: validateEmail(email) ?? undefined,
      password: validatePassword(password) ?? undefined,
    };
    setErrors(next);
    setStatus("");
    const firstError = (Object.keys(next) as (keyof Errors)[]).find(
      (key) => next[key],
    );
    if (firstError) {
      document.getElementById(`auth-${firstError}`)?.focus();
      return;
    }
    setStatus(
      signup
        ? "Your details are valid. Account creation requires an authentication service; no information was sent."
        : "Your details are valid. Sign in requires an authentication service; no information was sent.",
    );
  }

  return (
    <form className="auth-form" onSubmit={submit} noValidate>
      {signup && (
        <div className="auth-field">
          <label htmlFor="auth-name">Full Name</label>
          <input
            id="auth-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jamie Davis"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "auth-name-error" : undefined}
          />
          {errors.name && (
            <span className="field-error" id="auth-name-error">
              {errors.name}
            </span>
          )}
        </div>
      )}
      <div className="auth-field">
        <label htmlFor="auth-email">Email</label>
        <input
          id="auth-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="designer@example.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "auth-email-error" : undefined}
        />
        {errors.email && (
          <span className="field-error" id="auth-email-error">
            {errors.email}
          </span>
        )}
      </div>
      <div className="auth-field">
        <label htmlFor="auth-password">Password</label>
        <div className="password-field">
          <input
            id="auth-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={signup ? "new-password" : "current-password"}
            placeholder="********"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={
              errors.password ? "auth-password-error" : undefined
            }
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <span className="field-error" id="auth-password-error">
            {errors.password}
          </span>
        )}
      </div>
      <div className="auth-submit">
        <button className="pill-button" type="submit">
          {signup ? "Continue" : "Sign In"}
        </button>
      </div>
      {status && (
        <p className="auth-status" role="status">
          {status}
        </p>
      )}
      {!signup && (
        <>
          <div className="auth-divider">
            <span>or</span>
          </div>
          <div className="social-buttons">
            <button
              type="button"
              disabled
              title="Social sign in is not connected"
              aria-label="Facebook sign in unavailable"
            >
              <span aria-hidden="true">f</span>
            </button>
            <button
              type="button"
              disabled
              title="Social sign in is not connected"
              aria-label="Google sign in unavailable"
            >
              <span aria-hidden="true">G</span>
            </button>
          </div>
        </>
      )}
      <p className="auth-switch">
        {signup ? "Already have an account?" : "New user?"}{" "}
        <Link href={signup ? "/login" : "/signup"}>
          {signup ? "Login" : "Create an account"}
        </Link>
      </p>
    </form>
  );
}

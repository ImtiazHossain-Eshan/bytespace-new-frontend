import assert from "node:assert/strict";
import test from "node:test";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../src/lib/validation.ts";

test("validates email input without accepting malformed addresses", () => {
  assert.equal(validateEmail("  learner@example.com  "), null);
  assert.equal(validateEmail(""), "Enter your email address.");
  assert.equal(validateEmail("learner@"), "Enter a valid email address.");
});

test("requires a usable name for account creation", () => {
  assert.equal(validateName("  Jamie Davis "), null);
  assert.equal(validateName(" "), "Enter your full name.");
  assert.equal(validateName("J"), "Use at least 2 characters.");
});

test("requires an eight-character password", () => {
  assert.equal(validatePassword("long-passphrase"), null);
  assert.equal(validatePassword(""), "Enter your password.");
  assert.equal(validatePassword("short"), "Use at least 8 characters.");
});

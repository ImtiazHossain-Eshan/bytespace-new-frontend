export function validateEmail(value: string): string | null {
  const email = value.trim();
  if (!email) return "Enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Enter a valid email address.";
  return null;
}

export function validatePassword(value: string): string | null {
  if (!value) return "Enter your password.";
  if (value.length < 8) return "Use at least 8 characters.";
  return null;
}

export function validateName(value: string): string | null {
  if (!value.trim()) return "Enter your full name.";
  if (value.trim().length < 2) return "Use at least 2 characters.";
  return null;
}

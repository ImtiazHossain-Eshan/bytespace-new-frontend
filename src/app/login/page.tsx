import type { Metadata } from "next";
import { AuthPage } from "@/components/AuthPage";
import "../auth.css";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to ByteSpace.",
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}

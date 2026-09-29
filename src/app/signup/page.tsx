import type { Metadata } from "next";
import { AuthPage } from "@/components/AuthPage";
import "../auth.css";

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Join ByteSpace.",
};

export default function SignupPage() {
  return <AuthPage mode="signup" />;
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";
import { TrainingModeProvider } from "@/lib/training-mode-context";

export const metadata: Metadata = {
  title: "AstroCoach",
  description:
    "AstroCoach is an independent training platform for astronomy olympiad students.",
  icons: {
    icon: "/star-icon.svg",
  },
};

// The root layout wraps every page with the shared Navbar and Footer.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <TrainingModeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TrainingModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

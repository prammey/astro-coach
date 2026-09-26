import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
// Typesetting styles for the maths in MCQ explanations (see MathText).
import "katex/dist/katex.min.css";
import Navbar from "@/components/Navbar";
import { ViewAsPill } from "@/components/ViewAsSwitcher";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";
import { TrainingModeProvider } from "@/lib/training-mode-context";

// The body typeface, self-hosted by Next.js at build time. It sets a CSS
// variable on <html>; globals.css maps it to the `font-sans` class.
// Headings keep the original bold system font.
const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astro Coach",
  description:
    "Astro Coach is an independent training platform for astronomy olympiad students.",
  icons: {
    icon: "/star-icon.png",
    apple: "/star-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/star-icon.png",
        color: "#FFD700",
      },
    ],
  },
};

// The root layout wraps every page with the shared Navbar and Footer.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      {/* Browser extensions such as Grammarly add attributes to <body>;
          this stops React warning about them. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AuthProvider>
          <TrainingModeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* Owner only: floating reminder while a simulated view is on. */}
            <ViewAsPill />
          </TrainingModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

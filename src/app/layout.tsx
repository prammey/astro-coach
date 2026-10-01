import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";
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

// The Google Analytics measurement ID. It is only set on Vercel, so local
// development visits are never counted. Without it, no tag is loaded.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

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

        {/* Google Analytics (gtag.js). Lives in the root layout so it loads
            exactly once on every page. "afterInteractive" waits until the
            page is usable, so it never slows the first paint. */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

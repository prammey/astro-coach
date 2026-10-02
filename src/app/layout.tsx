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
import { SITE_DESCRIPTION, SITE_NAME, siteBaseUrl } from "@/lib/site";

// The body typeface, self-hosted by Next.js at build time. It sets a CSS
// variable on <html>; globals.css maps it to the `font-sans` class.
// Headings keep the original bold system font.
const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

// Site-wide defaults. Each page sets its own short `title` ("Pricing"), and
// the template turns it into "Pricing · Astro Coach". `metadataBase` lets
// link previews (Open Graph) use full URLs; the preview image itself is
// src/app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl()),
  title: {
    default: `${SITE_NAME} — Astronomy Olympiad Training`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Astronomy Olympiad Training`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Astronomy Olympiad Training`,
    description: SITE_DESCRIPTION,
  },
  // Small copies of the star logo (the original is 907px / 575 KB), so
  // browsers are not sent half a megabyte just for a tab icon.
  icons: {
    icon: "/icon-64.png",
    apple: "/apple-touch-icon.png",
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

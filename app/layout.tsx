import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thanigaivel.dev"),
  title: "Thanigaivel K | Software Developer",
  description:
    "Portfolio of Thanigaivel K, a software developer specializing in web development, programming, databases, and modern software solutions.",
  keywords: [
    "Thanigaivel K",
    "Thanigaivel",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Fresher",
    "MCA",
    "Annamalai University",
    "Python",
    "Java",
    "PHP",
    "React",
    "SQL",
    "MySQL",
    "Oracle",
    "Full Stack",
    "Portfolio",
  ],
  authors: [{ name: "Thanigaivel K", url: "https://thanigaivel.dev" }],
  creator: "Thanigaivel K",
  publisher: "Thanigaivel K",
  openGraph: {
    title: "Thanigaivel K | Software Developer",
    description:
      "Portfolio of Thanigaivel K, a software developer specializing in web development, programming, databases, and modern software solutions.",
    url: "https://thanigaivel.dev",
    siteName: "Thanigaivel K Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanigaivel K | Software Developer",
    description:
      "Portfolio of Thanigaivel K, a software developer specializing in web development, programming, databases, and modern software solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thanigaivel.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thanigaivel K",
    jobTitle: "Software Developer",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Annamalai University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "St. Joseph's College of Arts & Science",
      },
    ],
    sameAs: [
      "https://github.com/Thanigaivelk-official",
      "https://www.linkedin.com/in/thanigaivelk",
    ],
    knowsAbout: [
      "Java",
      "Python",
      "PHP",
      "JavaScript",
      "React",
      "SQL",
      "MySQL",
      "Oracle",
      "Data Structures & Algorithms",
      "AES Encryption",
      "Web Development",
    ],
    url: "https://thanigaivel.dev",
  };

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B1120] text-slate-100 font-sans selection:bg-primary/30 selection:text-white antialiased">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// Import Bootstrap first so its styles load globally
import "bootstrap/dist/css/bootstrap.min.css";

// Then import your custom global styles (Tailwind or your CSS)
import "@/styles/globals.css";

// Optional: smooth scrolling component
import { SmoothScroll } from "@/components/layout/SmoothScroll";

// Metadata for SEO and browser title
export const metadata = {
  title: "Digital Roadmap Conference 2025",
  description:
    "Join this premier tech event: Innovate, connect, and grow — Empowering Innovators. Register for the Digital Roadmap Conference 2025.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-light text-dark">
        <SmoothScroll>
          {/* Keep Header and Footer here if you want them global */}
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}


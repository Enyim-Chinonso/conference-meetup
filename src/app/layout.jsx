
// import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap (installed locally)
// import "@/styles/globals.css"; // ✅ Your global custom styles
// import { SmoothScroll } from "@/components/layout/SmoothScroll";

// export const metadata = {
//   title: "Digital Roadmap Conference 2025",
//   description: "Join the premier tech event of 2025. Innovate, connect, and grow.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Google Fonts */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>

//       <body>
//         {/* ✅ Optional smooth scroll wrapper */}
//         <SmoothScroll>{children}</SmoothScroll>
//       </body>
//     </html>
//   );
// }


// import "bootstrap/dist/css/bootstrap.min.css";
// import "@/styles/globals.css";
// import { SmoothScroll } from "@/components/layout/SmoothScroll";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// export const metadata = {
//   title: "Digital Roadmap Conference 2025",
//   description: "Join this premier tech event: Innovate, connect, and grow — Empowering Innovators. Register for this Digital Roadmap Conference."
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <SmoothScroll>
//           {/* <Header /> */}
//           {children}
//           {/* <Footer /> */}
//         </SmoothScroll>
//       </body>
//     </html>
//   );
// }


// ✅ Import Bootstrap first so its styles load globally
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Then import your custom global styles (Tailwind or your CSS)
import "@/styles/globals.css";

// ✅ Optional: smooth scrolling component
import { SmoothScroll } from "@/components/layout/SmoothScroll";

// ✅ Global layout components (uncomment if you want them on every page)
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// ✅ Metadata for SEO and browser title
export const metadata = {
  title: "Digital Roadmap Conference 2025",
  description:
    "Join this premier tech event: Innovate, connect, and grow — Empowering Innovators. Register for the Digital Roadmap Conference 2025.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-light text-dark">
        <SmoothScroll>
          {/* ✅ Keep Header and Footer here if you want them global */}
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}


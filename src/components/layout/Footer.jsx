// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Twitter, Linkedin, Github } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-light border-top py-4">
//       <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
//         {/* Logo Section */}
//         <Link href="/" className="mb-3 mb-md-0">
//           <Image
//             src="/spella logo.jpg" // make sure your file is in /public
//             alt="Company Logo"
//             width={120}
//             height={40}
//           />
//         </Link>

//         {/* Social Links */}
//         <div className="d-flex gap-3 mb-3 mb-md-0">
//           <Link href="#" className="text-secondary">
//             <Twitter size={20} />
//           </Link>
//           <Link href="#" className="text-secondary">
//             <Linkedin size={20} />
//           </Link>
//           <Link href="#" className="text-secondary">
//             <Github size={20} />
//           </Link>
//         </div>

//         {/* Copyright */}
//         <p className="text-muted small mb-0 text-center text-md-end">
//           &copy; {new Date().getFullYear()} Digital Roadmap Conference. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-5 mt-5 text-white"
      style={{
        background: "linear-gradient(135deg, #0d6efd15, #6c757d10)",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center gy-4">
          {/* Logo Section */}
          <div className="col-md-4 text-center text-md-start">
            <Link href="/" className="d-inline-flex align-items-center gap-2">
              <Image
                src="/spella logo.jpg" // Ensure file is in /public
                alt="Company Logo"
                width={130}
                height={45}
                className="rounded"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-4">
              <Link
                href="#"
                className="text-secondary hover-scale"
                title="Twitter"
              >
                <Twitter size={22} />
              </Link>
              <Link
                href="#"
                className="text-secondary hover-scale"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="#"
                className="text-secondary hover-scale"
                title="GitHub"
              >
                <Github size={22} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <span className="fw-semibold text-dark">
                Digital Roadmap Conference
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Extra Style for hover animation */}
      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.2);
          color: #0d6efd !important; /* Bootstrap primary blue */
        }
      `}</style>
    </footer>
  );
}

// "use client";
// import React from "react";

// const scheduleItems = [
//   { time: "09:00 AM", title: "Registration & Welcome Coffee", type: "General" },
//   { time: "10:00 AM", title: "Opening Keynote: The Next Digital Frontier", speaker: "Dr. Anya Sharma", type: "Keynote" },
//   { time: "11:00 AM", title: "The Decentralized Web: Beyond the Hype", speaker: "Chloe Garcia", type: "Talk" },
//   { time: "12:00 PM", title: "Lunch Break & Networking", type: "General" },
//   { time: "01:30 PM", title: "Scaling Securely: A DevOps Perspective", speaker: "Frank Miller", type: "Talk" },
//   { time: "02:30 PM", title: "Human-Centered AI: Designing for the Future", speaker: "Emily White", type: "Talk" },
//   { time: "03:30 PM", title: "Coffee Break", type: "General" },
//   { time: "04:00 PM", title: "Panel: The Multi-Cloud Reality", speaker: "Ben Carter & David Lee", type: "Panel" },
//   { time: "05:00 PM", title: "Closing Remarks & Future Outlook", type: "Keynote" },
//   { time: "06:00 PM", title: "Networking Reception", type: "General" },
// ];

// export default function Schedule() {
//   return (
//     <section id="schedule" className="py-5">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2 className="fw-bold display-6 text-primary">Conference Agenda</h2>
//           <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
//             A full day of insightful talks, networking, and learning opportunities.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="position-relative mx-auto" style={{ maxWidth: "800px" }}>
//           {/* Vertical timeline line */}
//           <div
//             className="position-absolute top-0 bottom-0 start-50 translate-middle-x bg-secondary"
//             style={{ width: "4px", opacity: "0.2" }}
//           ></div>

//           {scheduleItems.map((item, index) => (
//             <div
//               key={index}
//               className={`row align-items-center mb-5 position-relative ${
//                 index % 2 === 0 ? "flex-row-reverse" : ""
//               }`}
//             >
//               {/* Left or right card */}
//               <div className="col-md-5">
//                 <div
//                   className="card shadow-sm border-0"
//                   style={{
//                     background: "#f8f9fa",
//                     borderRadius: "1rem",
//                   }}
//                 >
//                   <div className="card-body">
//                     <h5 className="fw-bold">{item.title}</h5>
//                     {item.speaker && (
//                       <p className="text-muted mb-1">{item.speaker}</p>
//                     )}
//                     <span
//                       className={`badge ${
//                         item.type === "Keynote"
//                           ? "bg-info text-dark"
//                           : item.type === "Talk"
//                           ? "bg-secondary"
//                           : item.type === "Panel"
//                           ? "bg-warning text-dark"
//                           : "bg-light text-dark"
//                       }`}
//                     >
//                       {item.type}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline dot and time */}
//               <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
//                 <div
//                   className="bg-primary rounded-circle border border-4 border-white shadow"
//                   style={{ width: "20px", height: "20px" }}
//                 ></div>
//                 <p className="fw-bold text-primary mt-2">{item.time}</p>
//               </div>

//               {/* Spacer column */}
//               <div className="col-md-5"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

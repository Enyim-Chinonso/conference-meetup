"use client";

import { Suspense } from "react";
import PaymentContent from "./PaymentContent";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="text-center py-5">Loading payment page...</div>}>
      <PaymentContent />
    </Suspense>
  );
}

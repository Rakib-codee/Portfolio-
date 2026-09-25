"use client";

import { Button } from "@/components/ui/Button";
import { Printer } from "@/components/ui/Icons";

export function PrintButton() {
  return (
    <Button type="button" variant="secondary" onClick={() => window.print()}>
      <Printer size={16} /> Print / Save as PDF
    </Button>
  );
}

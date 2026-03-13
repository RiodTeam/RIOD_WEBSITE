"use client";

import { ReactLenis } from "lenis/react";
import SelectionWizard from "@/app/components/selection-guide/SelectionWizard";

export default function SelectionGuideClient() {
  return (
    <ReactLenis root>
      <main>
        <SelectionWizard />
      </main>
    </ReactLenis>
  );
}

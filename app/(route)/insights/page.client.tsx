"use client";

import React from "react";
import ReactLenis from "lenis/react";

import BlogGrid from "@/app/components/insights/BlogGrid";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <BlogGrid />

      </div>
    </ReactLenis>
  );
}

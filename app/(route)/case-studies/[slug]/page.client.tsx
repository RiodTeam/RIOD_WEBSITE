"use client";

import { caseStudiesData } from "@/app/components/data/caseStudiesData";
import CaseStudyDetail from "@/app/components/case-studies/CaseStudyDetail";

export default function PageClient({ slug }: { slug: string }) {
  const caseStudy = caseStudiesData.find(
    (item) => item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!caseStudy) {
    return (
      <div className="p-10 text-red-500 font-inter">Case study not found</div>
    );
  }

  return <CaseStudyDetail data={caseStudy} />;
}

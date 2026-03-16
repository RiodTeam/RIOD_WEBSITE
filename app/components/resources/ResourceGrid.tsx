"use client";

import { useState } from "react";
import {
  FileText,
  Wrench,
  BookOpen,
  BarChart3,
  Download,
  X,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import {
  resources,
  resourceCategories,
  type Resource,
  type ResourceCategory,
} from "../data/resourcesData";

const iconMap = { FileText, Wrench, BookOpen, BarChart3 };

function ResourceCard({
  resource,
  index,
  onDownload,
}: {
  resource: Resource;
  index: number;
  onDownload: (resource: Resource) => void;
}) {
  const Icon = iconMap[resource.icon] || FileText;

  return (
    <MotionWrapper delay={index * 0.06}>
      <div className={`group flex flex-col h-full rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 ${resource.isLeadMagnet ? "bg-[#1b1b1b] border border-[#cdf80a]/30" : "bg-[#f6f6f6] border border-transparent hover:border-[#cdf80a]/30"}`}>
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${resource.isLeadMagnet ? "bg-[#cdf80a]" : "bg-[#1b1b1b]"}`}>
            <Icon className={`w-6 h-6 ${resource.isLeadMagnet ? "text-[#1b1b1b]" : "text-[#cdf80a]"}`} />
          </div>
          {resource.isLeadMagnet && (
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#cdf80a] font-inter">
              Featured
            </span>
          )}
        </div>

        <h3 className={`text-lg md:text-xl font-medium font-inter mb-2 ${resource.isLeadMagnet ? "text-white" : "text-black"}`}>
          {resource.title}
        </h3>

        <p className={`para-text2 leading-relaxed flex-1 mb-4 ${resource.isLeadMagnet ? "text-[#9a99a2]" : "text-[#626262]"}`}>
          {resource.description}
        </p>

        <div className={`flex items-center justify-between mt-auto pt-4 border-t ${resource.isLeadMagnet ? "border-[#333]" : "border-[#e0e0e0]"}`}>
          <span className="text-xs text-[#9a99a2] font-inter uppercase tracking-wide">
            PDF &middot; {resource.fileSize}
          </span>
          <button
            onClick={() => onDownload(resource)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium font-inter transition-colors duration-300 ${resource.isLeadMagnet ? "bg-[#cdf80a] text-[#1b1b1b] hover:bg-[#b8e000]" : "bg-[#1b1b1b] text-[#cdf80a] hover:bg-[#cdf80a] hover:text-[#1b1b1b]"}`}
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </MotionWrapper>
  );
}

function DownloadForm({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full bg-transparent border border-[#d0d0d0] px-4 py-3 rounded-md text-sm font-inter text-black placeholder:text-[#9a99a2] focus:outline-none focus:border-[#cdf80a] transition-colors";

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/tech-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          resource: resource.title,
        }),
      });
      // Trigger download
      const link = document.createElement("a");
      link.href = resource.filePath;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl p-6 md:p-8 w-full max-w-[440px] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9a99a2] hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-medium text-black font-inter mb-2">
          Download Resource
        </h3>
        <p className="para-text2 text-[#626262] mb-6">
          Enter your details to download{" "}
          <span className="font-medium text-black">{resource.title}</span>
        </p>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-inter text-[#626262]">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-inter text-[#626262]">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-inter text-[#626262]">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone number"
              className={inputClass}
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full bg-[#1b1b1b] text-[#cdf80a] py-3 rounded-md font-inter font-medium hover:bg-[#333] transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          {loading ? "Processing..." : "Download Now"}
        </button>
      </div>
    </div>
  );
}

export default function ResourceGrid() {
  const [activeCategory, setActiveCategory] = useState<
    ResourceCategory | "All"
  >("All");
  const [downloadResource, setDownloadResource] = useState<Resource | null>(
    null
  );

  const filtered =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <>
      <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <MotionWrapper>
            <h2 className="section-heading text-black mb-4">
              Downloads & Resources
            </h2>
            <p className="para-text text-[#626262] max-w-[600px] mb-10 md:mb-14">
              Access product datasheets, installation guides, brochures, and
              comparison charts for all RIOD EV charging products.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
              {(["All", ...resourceCategories] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(cat as ResourceCategory | "All")
                  }
                  className={`px-5 py-2.5 rounded-md text-sm font-inter font-medium transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-[#1b1b1b] text-[#cdf80a]"
                      : "bg-[#f6f6f6] text-[#626262] hover:bg-[#e8e8e8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
                onDownload={setDownloadResource}
              />
            ))}
          </div>
        </div>
      </section>

      {downloadResource && (
        <DownloadForm
          resource={downloadResource}
          onClose={() => setDownloadResource(null)}
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import LeadFormPopup from "./LeadFormPopup";

const STORAGE_KEY = "riod_lead_popup_dismissed";

export default function AutoLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const handleScroll = () => {
      if (triggered) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 50) {
        triggered = true;
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  return <LeadFormPopup isOpen={isOpen} onClose={handleClose} />;
}

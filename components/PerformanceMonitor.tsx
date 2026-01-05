"use client";
import { useEffect, useState } from "react";

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    cls?: number;
    fid?: number;
  }>({});

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (
          entry.entryType === "paint" &&
          entry.name === "first-contentful-paint"
        ) {
          setMetrics((prev) => ({ ...prev, fcp: entry.startTime }));
        }
        if (entry.entryType === "largest-contentful-paint") {
          setMetrics((prev) => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === "layout-shift") {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            setMetrics((prev) => ({
              ...prev,
              cls: (prev.cls || 0) + layoutShiftEntry.value,
            }));
          }
        }
        if (entry.entryType === "first-input") {
          const firstInputEntry = entry as FirstInputEntry;
          setMetrics((prev) => ({
            ...prev,
            fid: firstInputEntry.processingStart - firstInputEntry.startTime,
          }));
        }
      }
    });

    observer.observe({
      entryTypes: [
        "paint",
        "largest-contentful-paint",
        "layout-shift",
        "first-input",
      ],
    });

    return () => observer.disconnect();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-md text-white text-xs p-3 rounded-lg border border-cyan-500/50 font-mono">
      <div className="text-cyan-400 mb-2">Performance Metrics</div>
      <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : "N/A"}</div>
      <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : "N/A"}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : "N/A"}</div>
      <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : "N/A"}</div>
    </div>
  );
};

export default PerformanceMonitor;

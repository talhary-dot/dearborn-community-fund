"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle2, Circle, ExternalLink, Navigation, Sparkles } from "lucide-react";
import { DIA_LOCATIONS, DIALocation } from "@/lib/data";

export default function DiaWalkMap() {
  const [activeArea, setActiveArea] = useState<"All" | "East Dearborn" | "West Dearborn">("All");
  const [visited, setVisited] = useState<Record<string, boolean>>({});

  const toggleVisited = (name: string) => {
    setVisited((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filteredLocations = activeArea === "All"
    ? DIA_LOCATIONS
    : DIA_LOCATIONS.filter((l) => l.area === activeArea);

  const totalVisited = Object.values(visited).filter(Boolean).length;

  return (
    <div className="space-y-8">
      
      {/* Header & Interactive Progress Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold badge-rose mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 10 Curated Masterpiece Replicas
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Dearborn DIA Inside/Out Walking Passport
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Check off each location as you explore the open-air galleries across East and West Dearborn!
          </p>
        </div>

        {/* Progress Badge */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 min-w-[200px] text-center sm:text-right">
          <div className="text-xs font-bold text-slate-700">Art Walk Progress</div>
          <div className="text-2xl font-extrabold text-rose-600 mt-0.5">
            {totalVisited} / {DIA_LOCATIONS.length} <span className="text-xs font-normal text-slate-700">Found</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 mt-2 overflow-hidden">
            <div
              className="bg-rose-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(totalVisited / DIA_LOCATIONS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {(["All", "East Dearborn", "West Dearborn"] as const).map((area) => (
          <button
            key={area}
            onClick={() => setActiveArea(area)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeArea === area
                ? "bg-rose-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {area} ({area === "All" ? DIA_LOCATIONS.length : DIA_LOCATIONS.filter(l => l.area === area).length})
          </button>
        ))}
      </div>

      {/* Locations Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLocations.map((loc) => {
          const isDone = !!visited[loc.name];
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name + " " + loc.address + " Dearborn MI")}`;

          return (
            <div
              key={loc.name}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isDone
                  ? "bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-400/20"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    loc.area === "East Dearborn" ? "badge-blue" : "badge-warm"
                  }`}>
                    {loc.area}
                  </span>

                  <button
                    onClick={() => toggleVisited(loc.name)}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Visited</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-slate-300" />
                        <span>Mark as Visited</span>
                      </>
                    )}
                  </button>
                </div>

                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {loc.name}
                </h4>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{loc.address}</span>
                </div>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {loc.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

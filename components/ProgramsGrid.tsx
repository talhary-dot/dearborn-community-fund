"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Palette, 
  Sparkles, 
  Frame, 
  PartyPopper, 
  MapPin, 
  Video, 
  ArrowRight, 
  Check, 
  Calendar, 
  Clock,
  ChevronRight
} from "lucide-react";
import { PROGRAMS, Program } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Frame: <Frame className="w-5 h-5" />,
  PartyPopper: <PartyPopper className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
};

export default function ProgramsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Youth & Public Art", "Visual Arts & Exhibitions", "Community Festival", "Public Art Trail"];

  const filteredPrograms = selectedCategory === "All" 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === selectedCategory || (selectedCategory === "Youth & Public Art" && p.category.includes("Youth")));

  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Core Cultural Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Community Projects & Signature Initiatives
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Discover how the Dearborn Community Fund fosters artistic expression, youth apprentice mentorship, gallery exhibitions, and citywide cultural festivities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover-lift flex flex-col justify-between group"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={program.featuredImage}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                    {iconMap[program.iconName] || <Sparkles className="w-3.5 h-3.5" />}
                    <span>{program.category}</span>
                  </span>
                </div>

                {/* Title in image bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {program.shortDescription}
                  </p>

                  {/* Program Highlights */}
                  <div className="space-y-2 mb-6">
                    {program.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {program.details?.schedule && (
                    <span className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {program.details.schedule}
                    </span>
                  )}
                  <Link
                    href={`/projects/${program.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-700 group-hover:text-blue-800 ml-auto"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

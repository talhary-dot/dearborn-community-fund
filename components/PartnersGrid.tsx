"use client";

import React from "react";
import { SPONSORS } from "@/lib/data";
import { Handshake, HeartHandshake, ShieldCheck } from "lucide-react";

export default function PartnersGrid() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold badge-blue mb-3">
            <Handshake className="w-3.5 h-3.5 text-blue-600" />
            <span>Community Philanthropy & Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Generous Partners & Sponsors
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            The Dearborn Community Fund is proud to partner with visionary foundations, municipal leadership, businesses, and community clubs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {SPONSORS.map((sponsor, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all text-center flex flex-col justify-center items-center group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {sponsor.name}
              </h4>
              <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider mt-1">
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>

        {/* Partnership invitation banner */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-sm font-bold">Become a Cultural Sponsor or Benefactor</div>
              <div className="text-xs text-slate-400">Support youth scholarships, theater performances, or gallery exhibitions.</div>
            </div>
          </div>
          <a
            href="mailto:ewoodyard@dearborn.gov?subject=Dearborn%20Community%20Fund%20Sponsorship%20Inquiry"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold whitespace-nowrap shadow-md transition-colors"
          >
            Inquire About Sponsorship
          </a>
        </div>

      </div>
    </section>
  );
}

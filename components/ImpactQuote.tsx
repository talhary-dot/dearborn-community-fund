"use client";

import React from "react";
import Link from "next/link";
import { Quote, Sparkles, Heart, ArrowRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

export default function ImpactQuote() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-amber-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-amber-200/60 shadow-xl shadow-amber-900/5 relative overflow-hidden">
          
          {/* Watermark Quote Icon */}
          <div className="absolute -top-6 -right-6 text-amber-100 pointer-events-none">
            <Quote className="w-48 h-48 opacity-60" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold badge-warm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Inspiration For Dearborn Creators</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-slate-800 leading-relaxed">
              “The one thing you have that nobody else has is you — your voice, your mind, your story, your vision. So write and draw and build and play and dance and live as only you can.”
            </blockquote>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-amber-100">
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Featured at the Mayor’s Arts Awards
                </div>
                <div className="text-xs text-slate-700">
                  Inspiring generations of Dearborn painters, performers, and community builders.
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/mayors-arts-awards"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-700/20 transition-all"
                >
                  <span>Nominate an Artist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/give"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all"
                >
                  <Heart className="w-3.5 h-3.5 text-amber-700" />
                  <span>Support The Arts</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

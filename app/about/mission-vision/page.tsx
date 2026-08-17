import React from "react";
import Link from "next/link";
import { Target, Eye, Sparkles, Heart } from "lucide-react";

export const metadata = {
  title: "Mission & Vision | Dearborn Community Fund",
  description: "Mission and Vision statement of the Dearborn Community Fund.",
};

export default function MissionVisionPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:underline">About</Link>
          <span>/</span>
          <span className="text-slate-600">Mission & Vision</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Mission & Vision
        </h1>

        {/* Scraped Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
          <img
            src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2014/03/dcf-art-tent-700.jpg?resize=634%2C272&ssl=1"
            alt="DCF Art Tent"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Exact Scraped Statements */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-200/80 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-sm font-extrabold uppercase tracking-wider text-blue-700">
                MISSION STATEMENT
              </span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
              The Dearborn Community Fund (DCF) promotes and supports initiatives that enrich the quality of life in Dearborn through creative philanthropic partnerships to the benefit of an empowered community.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-sm font-extrabold uppercase tracking-wider text-amber-800">
                VISION STATEMENT
              </span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
              The Dearborn Community Fund (DCF) is committed to providing opportunities to increase cultural awareness, community engagement and quality of life for all.
            </p>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/about"
            className="text-xs font-bold text-slate-700 hover:text-blue-700"
          >
            ← Back to About
          </Link>
          <Link
            href="/give-online"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-all"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Support Our Mission</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

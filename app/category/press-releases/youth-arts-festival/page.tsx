import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Youth Arts Festival Press Releases | Dearborn Community Fund",
  description: "Press releases and announcements for the Youth Arts Festival.",
};

export default function YouthArtsFestivalPressReleasesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Category: Youth Arts Festival</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Category: Youth Arts Festival
        </h1>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug hover:text-blue-700 transition-colors mb-3">
                <Link href="/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications">
                  Pockets of Perception Student Design Team 2026 Accepting Applications
                </Link>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                “Pockets of Perception – We Are One Community “ {`{POP}`}, a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2026 Design Team. POP is open to students attending any Wayne County school and entering their junior year in fall 2026...
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications"
                className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read Full Press Release</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug hover:text-blue-700 transition-colors mb-3">
                <Link href="/2024/03/06/dearborn-public-schools-city-wide-art-show">
                  Dearborn Public Schools City Wide Art Show
                </Link>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Mark your calendars for the 2024 Dearborn Public Schools City-Wide Student Art Show Opening Reception on April 3, 2024, from 4:30 pm to 7 pm at Padzieski Gallery...
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/2024/03/06/dearborn-public-schools-city-wide-art-show"
                className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read Full Story</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

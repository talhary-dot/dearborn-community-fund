import React from "react";
import Link from "next/link";
import { Palette, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Pockets of Perception | Dearborn Community Fund",
  description: "Pockets of Perception (POP) Summer Design Team program.",
};

export default function PocketsOfPerception2023Page() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Pockets of Perception</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Pockets of Perception
        </h1>

        {/* Scraped Content & Image */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
            <img
              src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/Untitled-design-scaled-e1676390137191-300x286.jpg?resize=300%2C286&ssl=1"
              alt="Pockets of Perception"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed text-base">
            <p>
              “Pockets of Perception – We Are One Community “ (POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2023 Design Team. POP is open to students attending any Dearborn school and entering their junior year in fall 2023. If accepted for the team, members must commit to a three-month project period, from mid-June through mid-August.
            </p>

            <div className="pt-2">
              <Link
                href="/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications"
                className="text-lg font-bold text-blue-700 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                <span>Click here for more information</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

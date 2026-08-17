import React from "react";
import Link from "next/link";
import { Palette, ExternalLink, Calendar, Mail, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pockets of Perception Student Design Team 2026 Accepting Applications | Dearborn Community Fund",
  description:
    "“Pockets of Perception – We Are One Community “ (POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2026 Design Team.",
};

export default function PopRecruitingPostPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <Link href="/category/events/pop-pockets-of-perception-events" className="hover:underline">"POP" Pockets of Perception</Link>
          <span>/</span>
          <span className="text-slate-600 truncate">Pockets of Perception Student Design Team 2026</span>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold badge-warm px-3 py-1 rounded-full">
            Applications Open
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pockets of Perception Student Design Team 2026 Accepting Applications
          </h1>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <p className="text-lg font-medium text-slate-900">
            <strong>“Pockets of Perception – We Are One Community “</strong> (POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2026 Design Team. POP is open to students attending any Wayne County school and entering their junior year in fall 2026. If accepted for the team, members must commit to a three-month project period, from mid-June through mid-August.
          </p>

          <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 space-y-3">
            <h3 className="text-base font-bold text-amber-900">
              POP is designed as an apprentice style program with the following goals:
            </h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>To encourage multi-cultural understanding and cooperation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>To involve young people in creative problem-solving tasks through the arts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>To provide experience in the business side of the arts process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>To encourage youth investment in the community</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>To engage the community in the process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>To create public art</span>
              </li>
            </ul>
          </div>

          <p>
            Team members, working with a qualified team leader in a workshop setting, develop design concepts, come to consensus on a project idea and then bring the project to completion in the form of public art.
          </p>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm">
            Team sessions commence <strong>mid-June and conclude mid-August</strong>
          </div>

          {/* Application Link Banner */}
          <div className="p-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold">POP Application Google Doc:</div>
              <div className="text-xs text-slate-300">Download, complete, and submit before deadline.</div>
            </div>
            <a
              href="https://docs.google.com/document/d/1tDwLoKJiJGVb5rhktyBKYs1GpMXXcdmW/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 whitespace-nowrap transition-colors"
            >
              <span>CLICK HERE FOR APPLICATION</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-1 text-sm pt-2">
            <div><strong>POP 2026 APPLICATION DEADLINE:</strong> <span className="text-rose-600 font-bold">April 17, 2026</span></div>
            <div><strong>Team Interviews:</strong> DATE TBD (Interviews will be scheduled between the hours 10 and noon)</div>
            <div>For additional information, contact the Dearborn Community Fund at <a href="mailto:communityfund@dearborn.gov" className="text-blue-700 underline font-semibold">communityfund@dearborn.gov</a></div>
          </div>

          {/* Scraped Images Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/02/365764233_694343496067794_5321448787280148430_n.jpg?resize=634%2C476&ssl=1"
                alt="POP Studio Work"
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2018/08/IMG_5762.jpg?resize=634%2C476&ssl=1"
                alt="POP Public Art"
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/02/c8b389f11b063e1099cc6cefcd86a046.webp?resize=634%2C476&ssl=1"
                alt="POP Mural Work"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

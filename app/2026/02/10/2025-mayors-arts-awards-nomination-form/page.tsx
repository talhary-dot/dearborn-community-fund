import React from "react";
import Link from "next/link";
import { Award, ExternalLink, Mail, Printer, Sparkles } from "lucide-react";
import NominationForm from "@/components/NominationForm";

export const metadata = {
  title: "2026 Mayor’s Arts Awards Nomination Form | Dearborn Community Fund",
  description:
    "The 2026 Mayor’s Arts Awards will be presented 7pm on Monday, May 20 2026 in Studio A at the Ford Community & Performing Arts Center.",
};

export default function MayorsArtsAwardsNominationPostPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <span className="text-slate-600">2026 Mayor’s Arts Awards Nomination Form</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          2026 Mayor’s Arts Awards Nomination Form
        </h1>

        {/* Scraped Banners */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2025/03/Copy-of-MAA_25_Nom-11-x-8.5-in-Medium-Banner-US-Landscape-scaled.png?resize=634%2C317&ssl=1"
              alt="Mayor's Arts Awards Banner"
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="text-center py-2">
            <a
              href="https://www.canva.com/design/DAGcgp65y3M/_BDt-gFcEOhJrTD474LEEA/view?utm_content=DAGcgp65y3M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85081bc075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Click Here to Print Nomination Form (Canva)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Exact Scraped Text */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <p className="text-lg font-bold text-slate-900">
            The 2026 Mayor’s Arts Awards will be presented 7pm on Monday, May 20 2026 in Studio A at the Ford Community & Performing Arts Center.
          </p>

          <p>
            The following awards will be presented during the event:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <strong className="block text-slate-900 text-sm mb-1">Artist Performer Award</strong>
              <p className="text-xs text-slate-600">To be given to a fine arts, literary or performing artist from the greater Dearborn community who has consistently made an impact.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <strong className="block text-slate-900 text-sm mb-1">Organization Award</strong>
              <p className="text-xs text-slate-600">To be given to an arts organization recognized for outstanding contributions to the advancement and support of the arts in the greater Dearborn community.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <strong className="block text-slate-900 text-sm mb-1">Patron Award</strong>
              <p className="text-xs text-slate-600">To be given to individuals, businesses or corporations that have supported excellence in the arts by contributing to an arts organization or to the greater Dearborn arts community.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <strong className="block text-slate-900 text-sm mb-1">Arts Educator Award</strong>
              <p className="text-xs text-slate-600">To be given to an arts educator from the greater Dearborn community who has provided students with exemplary educational opportunities and has shown the importance of the arts through example.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <strong className="block text-slate-900 text-sm mb-1">Volunteer Award</strong>
              <p className="text-xs text-slate-600">To be given to an individual who, through their volunteerism, has demonstrated significant accomplishment in advancing and supporting the arts in the greater Dearborn community.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl text-xs sm:text-sm text-blue-950 space-y-2">
            <div className="font-bold">COMPLETED FORMS AND ALL ACCOMPANYING MATERIALS CAN BE SUBMITTED AS FOLLOWS:</div>
            <div>Email to: EmmaJean Woodyard <a href="mailto:ewoodyard@dearborn.gov" className="underline font-semibold">ewoodyard@dearborn.gov</a> or By U.S. mail to DCF/ Mayor’s Arts Awards, 15801 Michigan Ave. Dearborn, MI. 48126</div>
          </div>

          <div className="text-center p-4 bg-rose-50 border border-rose-200 rounded-2xl">
            <div className="text-xs font-bold text-rose-700 uppercase tracking-widest">NOMINATION FORMS ARE DUE BY</div>
            <div className="text-2xl font-black text-rose-600 mt-1">MARCH 20, 2026</div>
          </div>

          {/* Scraped Logo link to PDF */}
          <div className="text-center pt-4">
            <a
              href="https://dearborncommunityfund.org/wp-content/uploads/2023/03/maa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform"
            >
              <img
                src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/03/maa-logo.jpg?resize=508%2C486&ssl=1"
                alt="Mayor's Arts Awards Logo"
                className="w-48 h-auto mx-auto drop-shadow-sm"
              />
              <span className="block text-xs font-bold text-blue-700 mt-2 underline">Download Official PDF Form</span>
            </a>
          </div>

        </div>

        {/* Digital Form Component on page */}
        <NominationForm />

      </div>
    </div>
  );
}

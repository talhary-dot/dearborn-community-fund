import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Events Archive – Page 2 | Dearborn Community Fund",
  description: "Browse historical events and stories from Dearborn Community Fund.",
};

export default function EventsPageTwo() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <span className="text-slate-600">Page 2</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Category: Events (Page 2)
        </h1>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover-lift">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              <Link href="/2024/03/06/dearborn-public-schools-city-wide-art-show" className="hover:text-blue-700">
                Dearborn Public Schools City Wide Art Show Opening Reception
              </Link>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Free and open to the public from April 3 to May 18 at The Padzieski gallery located inside the Ford Community & Performing Arts Center.
            </p>
            <Link
              href="/2024/03/06/dearborn-public-schools-city-wide-art-show"
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              Read Article →
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
          <Link
            href="/category/events"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-blue-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>« Previous Page</span>
          </Link>
          <span>Page 2 of 2</span>
        </div>

      </div>
    </div>
  );
}

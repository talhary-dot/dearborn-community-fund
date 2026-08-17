import React from "react";
import Link from "next/link";
import { Palette, Calendar, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Dearborn Public Schools City Wide Art Show | Dearborn Community Fund",
  description:
    "2024 Dearborn Public Schools City-Wide Student Art Show Opening Reception on April 3, 2024 at The Padzieski gallery.",
};

export default function DPSCityWideArtShowPostPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <Link href="/category/events/april-arts-dearborn" className="hover:underline">April Arts Dearborn</Link>
          <span>/</span>
          <span className="text-slate-600 truncate">DPS City Wide Art Show</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Dearborn Public Schools City Wide Art Show
        </h1>

        {/* Scraped Poster Image */}
        <div className="max-w-lg mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
          <img
            src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/03/DPS_ArtShow_24.gif?resize=528%2C408&ssl=1"
            alt="DPS Art Show Poster"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Scraped Text */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <p className="text-lg font-bold text-slate-900 leading-relaxed">
            Mark your calendars for the 2024 Dearborn Public Schools City-Wide Student Art Show Opening Reception on April 3, 2024, from 4:30 pm to 7 pm.
          </p>

          <p>
            The art exhibit is free and open to the public from April 3 to May 18 at The Padzieski gallery located inside the Ford Community & Performing Arts Center. The show features an impressive variety of creative work by elementary through high school students from across the city.
          </p>

          <p>
            A special feature of the Student Art Show is an impressive array of art by chosen high school seniors who will have the opportunity to talk about their work during the “senior spotlight” presentations.
          </p>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-700">
            <div><strong>Location:</strong> Padzieski Gallery; Ford Community & Performing Arts Center, 15801 Michigan Ave., Dearborn</div>
            <div><strong>Regular Hours:</strong> Wednesday through Friday from 12 pm to 6 pm, Saturday from 12 pm to 4 pm, and before select theater performances.</div>
            <div><strong>Inquiries:</strong> Call the DCF at 313-943-5478.</div>
          </div>

        </div>

      </div>
    </div>
  );
}

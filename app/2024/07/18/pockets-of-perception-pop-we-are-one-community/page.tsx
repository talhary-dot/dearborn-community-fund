import React from "react";
import Link from "next/link";
import { Palette, Sparkles, Heart } from "lucide-react";

export const metadata = {
  title: "Pockets of Perception (POP) – We Are One Community | Dearborn Community Fund",
  description:
    "The 2024 Mural Project under the direction of Artist/Teacher Ms. Sunshine Durant and Guest Artist Mr. Daniel Cascardo.",
};

export default function PopWeAreOneCommunityPostPage() {
  const images = [
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240717_104203986.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240711_114957034.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240711_102111009.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240709_104049268.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240627_122203313.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240627_122103207.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240627_102945720.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240627_101758195.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240619_110108940.jpg?resize=634%2C357&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240619_104730586.jpg?resize=634%2C357&ssl=1",
  ];

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
          <span className="text-slate-600 truncate">Pockets of Perception (POP) – We Are One Community</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Pockets of Perception (POP) – We Are One Community
        </h1>

        {/* Scraped Text & Details */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
            <h2 className="text-xl font-bold text-amber-950 uppercase tracking-wide">
              THE 2024 MURAL PROJECT
            </h2>
            <p className="text-sm font-semibold text-slate-800">
              THIS IS A MURAL IN PROGRESS UNDER THE DIRECTION OF ARTIST/TEACHER MS. SUNSHINE DURANT.<br />
              THE DESIGN TEAM CONSISTS OF 15 HIGH SCHOOL STUDENTS FROM AREA SCHOOLS. GUEST ARTIST/MENTOR IS MR. DANIEL CASCARDO.
            </p>
            <div className="pt-2 text-xs font-bold text-blue-700">
              JOIN US ON WEDNESDAY, JULY 31 AT 5 P.M. FOR THE OFFICIAL DEDICATION OF THE 2024 POP DESIGN MURAL
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p><strong>THE POP INITIATIVE</strong>, A DEARBORN COMMUNITY FUND PROJECT, WAS LAUNCHED IN 2010.</p>
            <p>PROJECT SUPPORT IS PROVIDED BY GENEROUS DONORS.</p>
          </div>

          {/* Scraped In-Progress Photo Gallery */}
          <div className="space-y-3 pt-4">
            <h3 className="text-base font-bold text-slate-900">
              Mural In Progress Work Photo Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
                  <img
                    src={img}
                    alt={`POP In Progress Photo ${idx + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

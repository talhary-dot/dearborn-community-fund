import React from "react";
import Link from "next/link";
import { Frame, MapPin } from "lucide-react";

export const metadata = {
  title: "New at the Ford Community & Performing Arts Center “MURAL WAY” | Dearborn Community Fund",
  description:
    "Located on the South side of the FC&PAC building enjoy sidewalks lined with beautiful murals created for April Arts Month.",
};

export default function MuralWayPostPage() {
  const images = [
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/Blue-Were-Open-Retro-Yard-Sign.png?resize=634%2C951&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/untitled-8677.jpg?resize=634%2C700&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/untitled-8745.jpg?resize=634%2C423&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/untitled-8830.jpg?resize=634%2C951&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/untitled-8837.jpg?resize=634%2C951&ssl=1",
    "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/untitled-8809.jpg?resize=634%2C442&ssl=1",
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
          <Link href="/category/events/april-arts-dearborn" className="hover:underline">April Arts Dearborn</Link>
          <span>/</span>
          <span className="text-slate-600 truncate">New at FC&PAC “MURAL WAY”</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          New at the Ford Community & Performing Arts Center “MURAL WAY”
        </h1>

        {/* Scraped Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <p className="text-lg font-medium text-slate-900">
            Located on the South side of the FC&PAC building enjoy sidewalks lined with beautiful murals created for April Arts Month but on display until October this year.
          </p>

          {/* Scraped Mural Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {images.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <img
                  src={img}
                  alt={`Mural Way Photo ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

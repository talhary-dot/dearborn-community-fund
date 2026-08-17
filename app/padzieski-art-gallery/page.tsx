import React from "react";
import Link from "next/link";
import { Frame, ExternalLink, MapPin, Clock, Heart } from "lucide-react";

export const metadata = {
  title: "Padzieski Art Gallery | Dearborn Community Fund",
  description:
    "The Padzieski Art Gallery in the west wing of the Ford Community & Performing Arts Center exhibits diverse established and emerging artists.",
};

export default function PadzieskiGalleryPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Padzieski Art Gallery</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Padzieski Art Gallery
        </h1>

        {/* Scraped Image & Link to padzieskigallery.org */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <a
            href="https://www.padzieskigallery.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden border border-slate-200 group relative max-w-xl mx-auto"
          >
            <img
              src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/pockets-of-perception.jpg?resize=432%2C324&ssl=1"
              alt="Padzieski Art Gallery"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
            />
          </a>

          {/* Exact Scraped Text */}
          <div className="space-y-4 text-slate-700 leading-relaxed text-base">
            <h2 className="text-xl font-bold text-slate-900">
              Padzieski Art Gallery
            </h2>
            <p>
              The Padzieski Art Gallery, located in the west wing of the Ford Community & Performing Arts Center, directly across from the theater, is operated by the Dearborn Community Fund in cooperation with the Dearborn Parks & Recreation Department. The Padzieski Gallery exhibits artwork from a diverse group of established and emerging artists. With an emphasis on building community, we also host and promote special events that foster interaction between artists, patrons of the arts and the general public. For more information, visit <a href="https://www.padzieskigallery.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline">padzieskigallery.org</a>.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://www.padzieskigallery.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-all"
            >
              <span>Visit Official Gallery Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/give-online"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-rose-600" />
              <span>Donate to Padzieski Gallery Fund</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

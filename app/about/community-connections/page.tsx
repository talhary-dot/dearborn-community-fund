import React from "react";
import Link from "next/link";
import { Video, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Community Connections | Dearborn Community Fund",
  description: "Watch Community Connections online video series on CDTV.",
};

export default function CommunityConnectionsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:underline">About</Link>
          <span>/</span>
          <span className="text-slate-600">Community Connections</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Community Connections
        </h1>

        {/* Scraped Image & Link to CDTV */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          <a
            href="https://cdtv.viebit.com/index.php?folder=ALL"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden border border-slate-200 group relative"
          >
            <img
              src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/community-connections.jpg?resize=634%2C357&ssl=1"
              alt="Community Connections"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 ml-0.5" />
              </div>
            </div>
          </a>

          {/* Exact Text */}
          <div className="pt-2">
            <a
              href="https://cdtv.viebit.com/index.php?folder=ALL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <span>Click here to watch Community Connections online</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-xs text-slate-700 mt-2">
              Hosted and archived on the City of Dearborn CDTV Viebit video platform.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

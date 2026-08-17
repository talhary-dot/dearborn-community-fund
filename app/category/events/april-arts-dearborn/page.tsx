import React from "react";
import Link from "next/link";
import { PartyPopper, Calendar, MapPin, ExternalLink, ChevronRight } from "lucide-react";

export const metadata = {
  title: "April Arts Dearborn | Dearborn Community Fund",
  description:
    "Dearborn’s April Arts Month full of events, workshops, Arty Party, open studio tours, and cultural offerings.",
};

export default function AprilArtsCategoryPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <span className="text-slate-600">April Arts Dearborn</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          April Arts Dearborn
        </h1>

        {/* Featured Banner Images from Scraped Site */}
        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/03/Orange-Pink-Vibrant-Gradient-80s-Aesthetic-Music-Festival-Banner-1920-x-1080-px.jpg?resize=634%2C357&ssl=1"
              alt="April Arts Month Festival Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Exact Scraped Narrative */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
            <h2 className="text-lg font-bold text-amber-950">
              Dearborn’s “April Arts Month,” full of events, workshops and cultural offerings, provides a glimpse into the wide variety of available creative opportunities that make for a vibrant community.
            </h2>
          </div>

          <p>
            April Arts Month is just around the corner, and the community is invited to kick off the month-long celebration with the free <strong>“Arty Party”</strong> event on Saturday, April 6th from 4 p.m. to 8 p.m. at the Ford Community & Performing Arts Center. This captivating event is perfect for all ages and will offer a range of activities such as art demonstrations, family crafts, a mini arts market, a pop-up exhibit curated by the Dearborn Fine Arts Club, Padzieski Gallery Art Exhibition and sculptural displays, short-film screening, a variety of musical and dance performances, culinary art demonstrations and much more. Guests will also have the opportunity to meet and engage with local artists from the Dearborn area.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-slate-800 bg-amber-50/40 py-2 rounded-r-xl">
            “We’re thrilled to kick off April Arts Month with this fun and engaging event,” said Sasha Corder, Program Manager for Dearborn Community Fund. “It’s the perfect way to bring the community together and showcase the incredible talent that we have in the area.”
          </blockquote>

          <h3 className="text-xl font-bold text-slate-900 pt-2">
            Detroit Institute of Arts (DIA) “Inside/Out” Project
          </h3>
          <p>
            On Saturday, April 20, Dearborn welcomes the Detroit Institute of Arts (DIA) “Inside/Out” project for a six month stay. 10 replicas of art from the DIA collection will be placed in the East and West Downtown areas. Free family activities scheduled at Commandant’s Quarters (West Dearborn) and Old City Hall / Arab American National Museum (East Dearborn).
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-2">
            Signature April Events:
          </h3>
          <ul className="space-y-2 text-sm text-slate-800 list-disc pl-5">
            <li><strong>Arty Party:</strong> Saturday, April 6 from 4-8 PM at FC&PAC.</li>
            <li><strong>Open Studio Hop:</strong> Saturday, April 15 from 1-5 PM visiting three working artist studios.</li>
            <li><strong>Art Stop at the Center:</strong> Sunday, April 23 from 12-5 PM featuring immersive art installations, figure drawing, and mini-concerts.</li>
            <li><strong>Mayor’s Arts Awards:</strong> Annual presentation ceremony in Studio A at FC&PAC.</li>
          </ul>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2 text-slate-700">
            <div><strong>Sponsors:</strong> Supported by City of Dearborn/Parks & Recreation and Economic Development. Generous sponsors include Dearborn Federal Savings Bank, Ameriprise Financial (Jim Thorpe, CFP, AWMA), East & West Dearborn DDAs, Malek Al-Kabob, and Qahwah House.</div>
            <div><strong>Contact:</strong> EmmaJean Woodyard, Dearborn Community Fund, 313-943-5478.</div>
          </div>

          <div className="text-center pt-4">
            <a
              href="https://dearborncommunityfund.org/wp-content/uploads/2023/03/april-arts.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Download Printable April Arts PDF Guide</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

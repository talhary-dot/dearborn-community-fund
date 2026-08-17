import React from "react";
import Link from "next/link";
import { Award, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Public Is Invited to the 2025 Mayor’s Arts Awards | Dearborn Community Fund",
  description:
    "The public is invited to attend the 2025 Mayor’s Arts Awards scheduled for 7 p.m., Monday, April 28 in Studio A at the Ford Community & Performing Arts Center.",
};

export default function PublicInvited2025MAAPage() {
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
          <span className="text-slate-600 truncate">Public Is Invited to the 2025 Mayor’s Arts Awards</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Public Is Invited to the 2025 Mayor’s Arts Awards
        </h1>

        {/* Scraped Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <p className="text-lg font-medium text-slate-900 leading-relaxed">
            Public Is Invited to the 2025 Mayor’s Arts Awards. The public is invited to attend the 2025 Mayor’s Arts Awards scheduled for 7 p.m., Monday, April 28 in Studio A at the Ford Community & Performing Arts Center. Artists, performers, and those who support the arts in the greater Dearborn community will be recognized for their contributions. The public is cordially invited to attend the program which includes seven awards categories, light entertainment and a reception immediately following.
          </p>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-sm text-slate-800">
            <div className="font-bold text-slate-900 text-base mb-2">2025 Award Honorees:</div>
            <div>• <strong>Janeen Bodary</strong> (Artist/Performer Award)</div>
            <div>• <strong>Niki Cassidy</strong> (Art Educator Award)</div>
            <div>• <strong>Karen Holland</strong> (Volunteer Award)</div>
            <div>• <strong>Dearborn Fine Arts Club</strong> (Organization Award)</div>
            <div>• <strong>Steven & Faye Adelson / Steven Bernard Jewelers</strong> (Patron Award)</div>
            <div>• <strong>Sunshine Durant</strong> (Special Recognition Award)</div>
            <div>• <strong>Haroutioun Bastajian</strong> (2025 Mayor’s Award, presented by Mayor Abdullah H. Hammoud)</div>
          </div>

          {/* Scraped Neil Gaiman quote image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2025/04/THE-ONE-THING-YOU-HAVE-THAT-NOBODY-ELSE-HAS-IS-YOU-%E2%80%93-YOUR-VOICE-YOUR-MIND-YOUR-STORY-YOUR-VISION.-SO-WRITE-AND-DRAW-AND-BUILD-AND-PLAY-AND-DANCE-AND-LIVE-AS-ONLY-YOU-CAN.-Neil-Gaiman-English-663x1024.png?resize=634%2C979&ssl=1"
              alt="Neil Gaiman Inspirational Quote Banner"
              className="w-full h-auto object-cover max-w-xl mx-auto"
            />
          </div>

          <p>
            The Mayor’s Arts Awards program, launched in 1988, has continued to highlight, acknowledge and encourage the many contributions made to the community through the efforts of creative, talented and generous people. Support for the 2025 Mayor’s Arts Awards program is provided by <strong>Dearborn Federal Savings Bank</strong>, <strong>Ameriprise Financial – Jim Thorpe, CFP, AWMA</strong> and <strong>Dearborn Dairy Queen on Greenfield</strong>.
          </p>

          <p>
            The Mayor’s Arts Awards is one of the many activities included in April Arts Month, a project of the Dearborn Recreation Commission/Cultural Arts Committee and the Dearborn Community Fund with additional support provided by the City of Dearborn/Parks & Recreation.
          </p>

          <p className="pt-2 text-sm text-slate-700">
            Additional information is available by contacting the Dearborn Community Fund office at <strong>313-943-5478</strong>.
          </p>

        </div>

      </div>
    </div>
  );
}

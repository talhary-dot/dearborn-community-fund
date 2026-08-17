import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Events Archive | Dearborn Community Fund",
  description: "Browse all events and news from the Dearborn Community Fund.",
};

const EVENTS_POSTS = [
  {
    title: "Pockets of Perception Student Design Team 2026 Accepting Applications",
    link: "/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications",
    date: "February 10, 2026",
    excerpt: "“Pockets of Perception – We Are One Community “ {POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2026 Design Team. POP is open to students attending any Wayne County school and entering their junior year in …",
    category: '"POP" Pockets of Perception',
  },
  {
    title: "2026 Mayor’s Arts Awards Nomination Form",
    link: "/2026/02/10/2025-mayors-arts-awards-nomination-form",
    date: "February 10, 2026",
    excerpt: "The 2026 Mayor’s Arts Awards will be presented 7pm on Monday, May 20 2026 in Studio A at the Ford Community & Performing Arts Center. The following awards will be presented during the event: Artist Performer, Organization, Patron, Arts Educator, Volunteer …",
    category: "Events",
  },
  {
    title: "Public Is Invited to the 2025 Mayor’s Arts Awards",
    link: "/2025/04/11/public-is-invited-to-the-2025-mayors-arts-awards",
    date: "April 11, 2025",
    excerpt: "The public is invited to attend the 2025 Mayor’s Arts Awards scheduled for 7 p.m., Monday, April 28 in Studio A at the Ford Community & Performing Arts Center. Artists, performers, and those who support the arts in the greater Dearborn community …",
    category: "April Arts Dearborn",
  },
  {
    title: "Celebrate the POP Student Design Team 2024",
    link: "/2024/07/18/colors-of-community-pop-mural-2024-dedication",
    date: "July 18, 2024",
    excerpt: "JOIN US ON WEDNESDAY, JULY 31 AT 5 P.M. FOR THE OFFICIAL DEDICATION OF THE 2024 POP DESIGN MURAL At the Ford Community & Performing Arts Center THIS MURAL, A GIFT TO CITY RECREATION, IS A PROJECT OF THE DEARBORN COMMUNITY FUND …",
    category: '"POP" Pockets of Perception',
  },
  {
    title: "New at the Ford Community & Performing Arts Center “MURAL WAY”",
    link: "/2024/07/18/new-at-the-ford-community-performing-arts-center-mural-way",
    date: "July 18, 2024",
    excerpt: "Located on the South side of the FC&PAC building enjoy sidewalks lined with beautiful murals created for April Arts Month but on display until October this year. …",
    category: "April Arts Dearborn",
  },
  {
    title: "Pockets of Perception (POP) – We Are One Community",
    link: "/2024/07/18/pockets-of-perception-pop-we-are-one-community",
    date: "July 18, 2024",
    excerpt: "THE 2024 MURAL PROJECT. THIS IS A MURAL IN PROGRESS UNDER THE DIRECTION OF ARTIST/TEACHER MS. SUNSHINE DURANT. THE DESIGN TEAM CONSISTS OF 15 HIGH SCHOOL STUDENTS FROM AREA SCHOOLS. GUEST ARTIST/MENTOR IS MR. DANIEL CASCARDO …",
    category: '"POP" Pockets of Perception',
  },
];

export default function CategoryEventsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Category: Events</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Category: Events
        </h1>

        {/* Category Nav Links */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Link
            href="/category/events"
            className="px-3.5 py-1.5 rounded-xl bg-blue-700 text-white text-xs font-bold shadow-sm"
          >
            All Events
          </Link>
          <Link
            href="/category/events/pop-pockets-of-perception-events"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
          >
            "POP" Pockets of Perception
          </Link>
          <Link
            href="/category/events/april-arts-dearborn"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
          >
            April Arts Dearborn
          </Link>
          <Link
            href="/category/press-releases/youth-arts-festival"
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
          >
            Youth Arts Festival
          </Link>
        </div>

        {/* List of Scraped Posts */}
        <div className="space-y-6">
          {EVENTS_POSTS.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-700 font-medium">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug hover:text-blue-700 transition-colors mb-3">
                  <Link href={post.link}>{post.title}</Link>
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={post.link}
                  className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination matching scrape */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Page 1 of 2</span>
          <Link
            href="/category/events/page/2"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-blue-700 transition-colors"
          >
            Next Page »
          </Link>
        </div>

      </div>
    </div>
  );
}

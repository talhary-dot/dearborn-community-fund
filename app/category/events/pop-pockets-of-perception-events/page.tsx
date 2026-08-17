import React from "react";
import Link from "next/link";
import { Palette, ChevronRight } from "lucide-react";

export const metadata = {
  title: '"POP" Pockets of Perception Events | Dearborn Community Fund',
  description: "Browse Pockets of Perception student design team news and dedication events.",
};

const POP_POSTS = [
  {
    title: "Pockets of Perception Student Design Team 2026 Accepting Applications",
    link: "/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications",
    date: "February 10, 2026",
    excerpt: "“Pockets of Perception – We Are One Community “ {POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2026 Design Team. POP is open to students attending any Wayne County school and entering their junior year in …",
  },
  {
    title: "Celebrate the POP Student Design Team 2024",
    link: "/2024/07/18/colors-of-community-pop-mural-2024-dedication",
    date: "July 18, 2024",
    excerpt: "JOIN US ON WEDNESDAY, JULY 31 AT 5 P.M. FOR THE OFFICIAL DEDICATION OF THE 2024 POP DESIGN MURAL At the Ford Community & Performing Arts Center THIS MURAL, A GIFT TO CITY RECREATION, IS A …",
  },
  {
    title: "Pockets of Perception (POP) – We Are One Community",
    link: "/2024/07/18/pockets-of-perception-pop-we-are-one-community",
    date: "July 18, 2024",
    excerpt: "THE 2024 MURAL PROJECT. THIS IS A MURAL IN PROGRESS UNDER THE DIRECTION OF ARTIST/TEACHER MS. SUNSHINE DURANT. THE DESIGN TEAM CONSISTS OF 15 HIGH SCHOOL STUDENTS FROM AREA SCHOOLS. GUEST ARTIST/MENTOR IS MR. DANIEL CASCARDO …",
  },
];

export default function PopCategoryEventsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <span className="text-slate-600">"POP" Pockets of Perception</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Category: "POP" Pockets of Perception
        </h1>

        <div className="space-y-6">
          {POP_POSTS.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="text-xs text-slate-700 font-medium mb-2">{post.date}</div>
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
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

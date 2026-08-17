import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  Heart, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Palette, 
  Award, 
  Users, 
  FileText
} from "lucide-react";
import ScrapedHeroSlideshow from "@/components/ScrapedHeroSlideshow";
import { SITE_METADATA, STATS, SPONSORS } from "@/lib/data";

export const metadata = {
  title: "Dearborn Community Fund | Official Arts, Culture & Community Site",
  description:
    "The Dearborn Community Fund (DCF) supports arts, recreational and cultural projects across Dearborn, MI, including Pockets of Perception (POP), Youth Arts Festival, and Padzieski Gallery.",
};

const NEWS_AND_EVENTS = [
  {
    id: "pop-recruiting",
    title: "Pockets of Perception Student Design Team 2026 Accepting Applications",
    image:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/02/Black-White-Brush-Abstract-art-painting-Video-Newsroom-Instagram-Post.png?resize=150%2C150&ssl=1",
    link: "/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications",
    excerpt:
      "“Pockets of Perception – We Are One Community “ {POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2026 Design Team. POP is open to students attending any Wayne County school and entering their junior year in …",
    tag: "Youth Public Art",
  },
  {
    id: "maa-2026",
    title: "2026 Mayor’s Arts Awards Nomination Form",
    image:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/03/maa-logo.jpg?resize=150%2C150&ssl=1",
    link: "/2026/02/10/2025-mayors-arts-awards-nomination-form",
    excerpt:
      "Click Here to Print Nomination Form. The 2026 Mayor’s Arts Awards will be presented 7pm on Monday, May 20 2026 in Studio A at the Ford Community & Performing Arts Center. The following awards will be presented during the event: Artist …",
    tag: "Civic Awards",
  },
  {
    id: "maa-2025-invited",
    title: "Public Is Invited to the 2025 Mayor’s Arts Awards",
    image:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2025/04/THE-ONE-THING-YOU-HAVE-THAT-NOBODY-ELSE-HAS-IS-YOU-%E2%80%93-YOUR-VOICE-YOUR-MIND-YOUR-STORY-YOUR-VISION.-SO-WRITE-AND-DRAW-AND-BUILD-AND-PLAY-AND-DANCE-AND-LIVE-AS-ONLY-YOU-CAN.-Neil-Gaiman-English.png?resize=150%2C150&ssl=1",
    link: "/2025/04/11/public-is-invited-to-the-2025-mayors-arts-awards",
    excerpt:
      "Public Is Invited to the 2025 Mayor’s Arts Awards. The public is invited to attend the 2025 Mayor’s Arts Awards scheduled for 7 p.m., Monday, April 28 in Studio A at the Ford Community & Performing Arts Center. Artists, performers, and those who …",
    tag: "Arts Month Celebration",
  },
  {
    id: "pop-2024-dedication",
    title: "Celebrate the POP Student Design Team 2024",
    image:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240717_104203986.jpg?resize=150%2C150&ssl=1",
    link: "/2024/07/18/colors-of-community-pop-mural-2024-dedication",
    excerpt:
      "JOIN US ON WEDNESDAY, JULY 31 AT 5 P.M. FOR THE OFFICIAL DEDICATION OF THE 2024 POP DESIGN MURAL At the Ford Community & Performing Arts Center THIS MURAL, A GIFT TO CITY RECREATION, IS A …",
    tag: "Mural Dedication",
  },
  {
    id: "mural-way",
    title: "New at the Ford Community & Performing Arts Center “MURAL WAY”",
    image:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_5080-scaled.jpg?resize=150%2C150&ssl=1",
    link: "/2024/07/18/new-at-the-ford-community-performing-arts-center-mural-way",
    excerpt:
      "Located on the South side of the FC&PAC building enjoy sidewalks lined with beautiful murals created for April Arts Month but on display until October this year. …",
    tag: "Outdoor Gallery",
  },
  {
    id: "pop-we-are-one",
    title: "Pockets of Perception (POP) – We Are One Community",
    image:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240711_114957034.jpg?resize=150%2C150&ssl=1",
    link: "/2024/07/18/pockets-of-perception-pop-we-are-one-community",
    excerpt:
      "THE 2024 MURAL PROJECT. THIS IS A MURAL IN PROGRESS UNDER THE DIRECTION OF ARTIST/TEACHER MS. SUNSHINE DURANT. THE DESIGN TEAM CONSISTS OF 15 HIGH SCHOOL STUDENTS FROM AREA SCHOOLS. GUEST ARTIST/MENTOR IS MR. DANIEL CASCARDO JOIN US ON WEDNESDAY, JULY …",
    tag: "Public Art Progress",
  },
];

export default function HomePage() {
  return (
    <div className="py-8 sm:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Exact Scraped Slideshow Carousel */}
        <ScrapedHeroSlideshow />

        {/* Quick Action Navigation Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
            
            {/* Button 1: WHAT'S HAPPENING */}
            <Link
              href="/dearborn-calendar"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-md shadow-blue-700/20 hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>What’s Happening</span>
            </Link>

            {/* Button 2: MAKE A DONATION */}
            <Link
              href="/give-online"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-md shadow-amber-500/20 hover:shadow-lg transition-all"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Make a Donation</span>
            </Link>

            {/* Button 3: CONTACT */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-md transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact DCF</span>
            </Link>

            {/* Button 4: Find us on Facebook */}
            <a
              href="https://www.facebook.com/DearbornCommunityFund"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all group"
            >
              <img
                src="/find-us-on-facebook.jpg"
                alt="Find Us on Facebook"
                className="h-10 object-contain group-hover:scale-105 transition-transform"
              />
            </a>

          </div>
        </div>

        {/* Main Two-Column Layout (News & Events + Scraped Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Column: News & Events */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Latest Updates
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                  News & Events
                </h2>
              </div>
              <Link
                href="/category/events"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* List of Scraped News Articles */}
            <div className="space-y-6">
              {NEWS_AND_EVENTS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover-lift flex flex-col sm:flex-row gap-6 group"
                >
                  {/* Thumbnail Image */}
                  <div className="w-full sm:w-36 h-36 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors mb-2">
                        <Link href={item.link}>{item.title}</Link>
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:text-blue-800"
                      >
                        <span>More Info</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Scraped Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Widget 1: This Week in Dearborn */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base border-b border-slate-100 pb-3">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>This Week in Dearborn</span>
              </div>
              <p className="text-xs text-slate-700 py-1">
                Nothing from Mon, Aug 17 to Sun, Aug 23.
              </p>
              <Link
                href="/dearborn-calendar"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-colors"
              >
                <span>View Full Calendar</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Widget 2: Pockets of Perception */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover-lift">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-base font-extrabold text-slate-900">
                  Pockets of Perception
                </h4>
                <span className="text-[10px] font-bold badge-warm px-2 py-0.5 rounded-full">
                  POP
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-40">
                <img
                  src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/Untitled-design-scaled-e1676390137191.jpg?resize=266%2C160&ssl=1"
                  alt="Pockets of Perception"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                “Pockets of Perception – We Are One Community “ (POP), a program of the Dearborn Community Fund (DCF), is recruiting new members for the Summer 2023 Design Team. POP is open to students attending any Dearborn school and entering their junior year in fall …
              </p>

              <Link
                href="/pockets-of-perception-2023"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Widget 3: Youth in Arts */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover-lift">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-base font-extrabold text-slate-900">
                  Youth in Arts
                </h4>
                <span className="text-[10px] font-bold badge-blue px-2 py-0.5 rounded-full">
                  Spring 2024
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-36">
                <img
                  src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2014/10/America-the-Beautiful-Youth-in-Arts-2016-PM-2.jpg?resize=266%2C160&ssl=1"
                  alt="America the Beautiful Youth in Arts"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs font-bold text-slate-900">
                Returns in Spring 2024
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Over 400 students from Dearborn Public Schools and Henry Ford College showcase their talents and creative energy each April at the annual Youth Arts Festival, a one day showcase featuring visual, instrumental, choral and theatrical …
              </p>

              <Link
                href="/community-projects/youth-in-arts"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Widget 4: Community Connections */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover-lift">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-base font-extrabold text-slate-900">
                  Community Connections
                </h4>
                <span className="text-[10px] font-bold badge-rose px-2 py-0.5 rounded-full">
                  CDTV
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-40">
                <img
                  src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/community-connections.jpg?resize=266%2C160&ssl=1"
                  alt="Community Connections"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Click here to watch Community Connections online. …
              </p>

              <Link
                href="/about/community-connections"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Widget 5: Padzieski Art Gallery */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover-lift">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-base font-extrabold text-slate-900">
                  Padzieski Art Gallery
                </h4>
                <span className="text-[10px] font-bold badge-emerald px-2 py-0.5 rounded-full">
                  Gallery
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-40">
                <img
                  src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/padzieski-art-gallery.jpg?resize=266%2C160&ssl=1"
                  alt="Padzieski Art Gallery"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                The Padzieski Art Gallery, located in the west wing of the Ford Community & Performing Arts Center, directly across from the theater, is operated by the Dearborn Community Fund in cooperation with the Dearborn Parks & Recreation Department. The …
              </p>

              <Link
                href="/padzieski-art-gallery"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Read More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

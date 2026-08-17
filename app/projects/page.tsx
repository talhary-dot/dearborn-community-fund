import React from "react";
import Link from "next/link";
import { PROGRAMS } from "@/lib/data";
import { 
  Palette, 
  Sparkles, 
  Frame, 
  PartyPopper, 
  MapPin, 
  Video, 
  ArrowRight, 
  Check, 
  Calendar, 
  Clock,
  ChevronRight,
  Heart
} from "lucide-react";

export const metadata = {
  title: "Programs & Community Projects | Dearborn Community Fund",
  description:
    "Explore the signature initiatives of the Dearborn Community Fund: POP youth apprenticeships, Youth in Arts Festival, Padzieski Art Gallery, April Arts Month, and DIA Inside/Out.",
};

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Frame: <Frame className="w-5 h-5" />,
  PartyPopper: <PartyPopper className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
};

export default function ProjectsHubPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Programs & Projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Programs & Community Projects
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            The Dearborn Community Fund powers iconic cultural, youth mentorship, and public art initiatives across the city. Explore each program below to learn more, participate, or support.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover-lift flex flex-col justify-between group"
            >
              {/* Image with overlay */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={program.featuredImage}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                    {iconMap[program.iconName] || <Sparkles className="w-3.5 h-3.5" />}
                    <span>{program.category}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    {program.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {program.details?.schedule && (
                    <span className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {program.details.schedule}
                    </span>
                  )}
                  <Link
                    href={`/projects/${program.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-800 ml-auto"
                  >
                    <span>Full Program Details</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Have a Community Project Idea?</h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              The Dearborn Community Fund partners with grassroots cultural creators and schools. Contact us to learn about potential grant and sponsorship opportunities.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold whitespace-nowrap shadow-md transition-colors"
          >
            Submit Grant Inquiry
          </Link>
        </div>

      </div>
    </div>
  );
}

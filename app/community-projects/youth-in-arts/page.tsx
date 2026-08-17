import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, Phone, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Youth Arts Festival | Dearborn Community Fund",
  description:
    "Over 400 students from Dearborn Public Schools and Henry Ford College showcase their talents at the annual Youth Arts Festival.",
};

export default function YouthInArtsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/community-projects" className="hover:underline">Community Projects</Link>
          <span>/</span>
          <span className="text-slate-600">Youth Arts Festival</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Youth Arts Festival
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
            Returns in Spring 2024
          </h2>
        </div>

        {/* Scraped Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <p>
            Over 400 students from Dearborn Public Schools and Henry Ford College showcase their talents and creative energy each April at the annual Youth Arts Festival, a one day showcase featuring visual, instrumental, choral and theatrical offerings, illustrating the variety of art programs that engage Dearborn students and encourage them to excel.
          </p>

          <p>
            The Youth Arts Festival is a co-operative project by the Dearborn Community Fund (DCF), Dearborn Public Schools and Henry Ford College with valuable support provided by: the City of Dearborn Recreation & Parks Department, Dearborn Community Arts Council, and other sponsors.
          </p>

          <p>
            The celebration includes the Dearborn Public Schools City Wide Art Show, which remains in the Padzieski Gallery at The Center for a month.
          </p>

          {/* Embedded Image & Performances Text */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-center">
            <div className="shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2014/10/America-the-Beautiful-Youth-in-Arts-2016-PM-2.jpg?resize=313%2C120&ssl=1"
                alt="America the Beautiful Youth in Arts"
                className="w-full sm:w-72 h-auto object-cover"
              />
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              In the Michael A. Guido Theater, performances include selections from recent high school theater performances, vocal and instrumental music by the Elementary and Secondary Honors Choirs, Blue Fusion from Henry Ford Community College, award winning high school choirs and bands, and the Maples Arabic Music Ensemble. Special guest performers include Dearborn schools graduates who are now professional musicians or visual artists.
            </p>
          </div>

          <p className="pt-2">
            The DCF is a 501c3 organization with the mission to support cultural and recreational programs in Dearborn. For more information about the Festival, other DCF projects, or how to contribute to the Fund, call <strong>313-943-5478</strong>.
          </p>

          {/* Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Contact Phone: (313) 943-5478</span>
            </div>

            <Link
              href="/give-online"
              className="px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Support Youth in Arts</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

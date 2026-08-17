import React from "react";
import Link from "next/link";
import { Palette, Users, Sparkles, Heart } from "lucide-react";

export const metadata = {
  title: "“Colors of Community” POP Mural 2024 Dedication | Dearborn Community Fund",
  description:
    "Official Dedication of the 2024 POP Design Mural at the Ford Community & Performing Arts Center.",
};

export default function ColorsOfCommunityPostPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs matching scrape */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/category/events" className="hover:underline">Events</Link>
          <span>/</span>
          <Link href="/category/events/pop-pockets-of-perception-events" className="hover:underline">"POP" Pockets of Perception</Link>
          <span>/</span>
          <span className="text-slate-600 truncate">“Colors of Community” POP Mural 2024 Dedication</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Celebrate the POP Student Design Team 2024
        </h1>

        {/* Scraped Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
          <img
            src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240717_104203986-1.jpg?resize=634%2C357&ssl=1"
            alt="Colors of Community POP Mural"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Scraped Text */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base">
          
          <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-2xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-900">
              JOIN US ON WEDNESDAY, JULY 31 AT 5 P.M. FOR THE OFFICIAL DEDICATION OF THE 2024 POP DESIGN MURAL
            </h2>
            <div className="text-sm font-bold text-blue-700">
              At the Ford Community & Performing Arts Center
            </div>
            <p className="text-xs text-blue-950 mt-2">
              THIS MURAL, A GIFT TO CITY RECREATION, IS A PROJECT OF THE DEARBORN COMMUNITY FUND “POCKETS OF PERCEPTION” (POP) 2024 TEAM.
            </p>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-900">
            <strong>The POP Mission:</strong> To encourage multicultural understanding and co-operation through a team approach. To engage young people in creative problem solving through the arts while encouraging their investment in the community.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">2024 POP Team Members:</h3>
              <p className="text-slate-700 leading-relaxed">
                Malak Abdulroda, Amina Bazzi, Kole Catris, Addison Cleveland, Steven Durant, Amanda Eldaw, Camilla Gomez, Lily Martinez, Serena Salameh, Ashe Watson, Liliana Wilgen.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Graduate Team & Mentors:</h3>
              <p className="text-slate-700 leading-relaxed">
                Lauren Boyce, Iliana Sarkisian, Isabela Sierzputowski, Zeinab Zorkot.<br />
                <strong>Team Director:</strong> Sunshine Durant<br />
                <strong>Guest Artist:</strong> Daniel Cascardo<br />
                <strong>Special Assistance:</strong> Sasha Corder, Robert W. Curtis, Steve Durant, Sean Fletcher (Recreation Director).
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-amber-400">POP 2024 Funding provided by:</div>
            <div className="text-slate-300 leading-relaxed">
              FORD PHILANTHROPY • PAUL AND SANDY BUTLER • EXCHANGE CLUB OF DEARBORN • WOODYARD FAMILY • ROTARY CLUB OF DEARBORN<br />
              Steven and Faye Adelson, Robert Curtis, 3D Financial LLC, Susan Rowe, Johanna Seidel.
            </div>
            <div className="pt-2 border-t border-slate-800 text-slate-400">
              <strong>Project Support provided by:</strong> City of Dearborn; Abdullah Hammoud, Mayor; Martin Zbosnik, Kim Ismail, Blick Art Materials.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

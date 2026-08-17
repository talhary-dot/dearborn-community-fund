import React from "react";
import Link from "next/link";
import { 
  Building, 
  Target, 
  Eye, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Video
} from "lucide-react";
import { SITE_METADATA, STATS } from "@/lib/data";

export const metadata = {
  title: "About Us | Dearborn Community Fund",
  description:
    "Learn about the mission, vision, history, leadership, and community partnerships of the Dearborn Community Fund (Est. 2000).",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2000",
      title: "Foundation Established",
      desc: "Founded as a 501(c)(3) nonprofit to ensure lasting philanthropic support for cultural, artistic, and recreational projects across Dearborn.",
    },
    {
      year: "2010",
      title: "Pockets of Perception (POP) Launched",
      desc: "Inaugurated our flagship youth public art apprentice program to foster multi-ethnic understanding and create civic landmarks.",
    },
    {
      year: "2015",
      title: "Padzieski Gallery Stewardship",
      desc: "Assumed direct operational leadership of Padzieski Art Gallery in the Ford Community & Performing Arts Center in partnership with Parks & Recreation.",
    },
    {
      year: "Present",
      title: "April Arts & Citywide Expansion",
      desc: "Expanded into month-long cultural festivals, DIA Inside/Out master trails, high school senior spotlights, and community grantmaking.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cultivating Creativity & Community in Dearborn
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            The Dearborn Community Fund contributes to the vibrancy of Dearborn through active support of arts, recreational, and cultural initiatives across the city and at the Ford Community & Performing Arts Center.
          </p>
        </div>

        {/* Mission & Vision Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50/40 rounded-3xl p-8 sm:p-10 border border-blue-200/80 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-700/20">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full">
              Our Mission
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
              Empowering Community Through Philanthropy
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {SITE_METADATA.missionStatement}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50/40 rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-6 shadow-md shadow-amber-600/20">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
              Enriching Quality of Life for All
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {SITE_METADATA.visionStatement}
            </p>
          </div>

        </div>

        {/* Core Narrative / Heritage Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
              Established 2000
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A Legacy of Enhancing Quality of Life
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in 2000, the Fund is committed to providing enrichment opportunities to enhance the quality of life for those who live, play, and work in Dearborn while maintaining Dearborn as a creative and dynamic city.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In partnership with the City of Dearborn and other community partners, the Fund takes a leadership role in presenting donation-funded programs such as student apprentice murals, annual arts festivals, gallery exhibitions, and citywide arts month activations.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>501(c)(3) Nonprofit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tax Deductible Contributions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Nonpartisan Community Leadership</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Key Focus Areas</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong>Youth Apprenticeships:</strong> Pockets of Perception (POP) student mural fabrication.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong>Public Galleries:</strong> Free access and exhibitions at Padzieski Art Gallery.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong>Citywide Celebrations:</strong> April Arts Dearborn, Arty Party, and DIA Inside/Out.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong>Civic Recognition:</strong> Annual Mayor’s Arts Awards honoring local excellence.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong>Recreational Support:</strong> Parks, Bike Dearborn, and theater endowments.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Journey of Impact
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Over two decades of shaping Dearborn into a hub of cultural distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative hover-lift flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-blue-700 block mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Office Contact */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Users className="w-3.5 h-3.5" /> Foundation Leadership
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Dedicated to Our Community
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Led by <strong>EmmaJean Woodyard</strong> (Executive Director) and <strong>Sasha Corder</strong> (Program Manager), along with a dedicated board of community leaders, artists, and educators working in close cooperation with the City of Dearborn and Mayor Abdullah H. Hammoud.
              </p>
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="font-bold text-white text-sm">EmmaJean Woodyard</div>
                  <div className="text-amber-400 font-medium">Executive Director</div>
                  <div className="mt-2 flex items-center gap-1.5 text-slate-300">
                    <Phone className="w-3.5 h-3.5" /> (313) 943-5478
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 mt-1">
                    <Mail className="w-3.5 h-3.5" /> ewoodyard@dearborn.gov
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="font-bold text-white text-sm">Sasha Corder</div>
                  <div className="text-blue-400 font-medium">Program Manager</div>
                  <div className="mt-2 text-slate-300">
                    Overseeing April Arts Month, Arty Party, and youth programming.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Headquarters & Mailing Address</span>
              </h4>
              <div className="text-xs text-slate-200 leading-relaxed">
                Dearborn Community Fund<br />
                Ford Community & Performing Arts Center (FC&PAC)<br />
                15801 Michigan Ave.<br />
                Dearborn, MI 48126
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                >
                  Send Inquiry to DCF
                </Link>
                <Link
                  href="/give"
                  className="w-full text-center py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-colors"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Community Connections Online TV feature */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
              <Video className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Watch “Community Connections” Broadcasts Online
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                Catch full episodes featuring Dearborn artists, behind-the-scenes POP mural documentaries, and awards recaps on CDTV.
              </p>
            </div>
          </div>

          <a
            href="https://cdtv.viebit.com/index.php?folder=ALL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 whitespace-nowrap transition-colors"
          >
            <span>Watch on CDTV</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

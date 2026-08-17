"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, Heart, Users, Palette, Trophy } from "lucide-react";

export interface SlideItem {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
  tag: string;
}

export const SLIDES: SlideItem[] = [
  {
    id: "volunteer",
    title: "Volunteer with DCF",
    description:
      "We depend on volunteers who share their talents and time to help with projects such as fundraisers, student workshops, the Youth in Arts Festival, and the Homecoming Festival.",
    link: "/community-projects/youth-in-arts",
    linkText: "Learn About Volunteering",
    image: "/slide1-volunteer.jpg",
    tag: "Get Involved",
  },
  {
    id: "mission",
    title: "Mission & Vision",
    description:
      "The Dearborn Community Fund is a non-profit organization that supports arts, recreational and cultural projects and activities across the city of Dearborn, MI.",
    link: "/about/mission-vision",
    linkText: "Our Mission & Vision",
    image: "/slide2-mission.jpg",
    tag: "About DCF",
  },
  {
    id: "youth-arts",
    title: "Youth Arts Festival",
    description:
      "The DCF puts on this annual festival at the Ford Community & Performing Arts Center, featuring student art exhibits, instrumental and vocal music, and dance performances.",
    link: "/give-online",
    linkText: "Support Youth in Arts",
    image: "/slide3-youth.jpg",
    tag: "Student Arts",
  },
  {
    id: "pop",
    title: "Pockets of Perception",
    description:
      "Local high school students are in the process of designing public art and mosaics to be installed across Dearborn, including the Intermodal Passenger Rail Station and FC&PAC.",
    link: "/2026/02/10/pockets-of-perception-student-design-team-2023-accepting-applications",
    linkText: "Explore POP Program",
    image: "/slide4-pop.jpg",
    tag: "Youth Apprenticeship",
  },
  {
    id: "give",
    title: "Give to the Dearborn Community Fund",
    description:
      "You can help the Community Fund by making a donation. The DCF is a 501(c)3 nonprofit organization. Donations are tax deductible to the full extent permissible by law.",
    link: "/give-online",
    linkText: "Make a Donation",
    image: "/slide5-give.jpg",
    tag: "501(c)(3) Giving",
  },
];

export default function ScrapedHeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const current = SLIDES[currentIndex];

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
      {/* Background Image with Gradient Overlay */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover transition-transform duration-700 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30" />
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
      </div>

      {/* Slide Content Overlay */}
      <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-between text-white z-10">
        
        {/* Top Tag & Progress */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-amber-300 border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.tag}</span>
          </span>

          <div className="flex items-center gap-1.5 bg-slate-950/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-300 border border-white/10">
            <span>{currentIndex + 1}</span>
            <span className="text-slate-500">/</span>
            <span>{SLIDES.length}</span>
          </div>
        </div>

        {/* Center/Bottom Headline & Description */}
        <div className="max-w-2xl space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight">
            {current.title}
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed drop-shadow max-w-xl">
            {current.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href={current.link}
              className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all duration-200"
            >
              <span>{current.linkText}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              href="/give-online"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/25 transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-white/80" />
              <span>Donate</span>
            </Link>
          </div>
        </div>

        {/* Bottom Slide Indicators */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-colors"
              aria-label="Previous horizontal slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-colors"
              aria-label="Next horizontal slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  featuredImage: string;
  iconName: string;
  highlights: string[];
  details?: {
    location?: string;
    schedule?: string;
    targetAudience?: string;
    admission?: string;
    contact?: string;
  };
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  featuredImage: string;
  author?: string;
  badge?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "April Arts" | "Exhibition" | "Awards" | "Student Programs" | "Community";
  description: string;
  isFeatured?: boolean;
  actionUrl?: string;
  actionLabel?: string;
}

export interface AwardCategory {
  title: string;
  description: string;
  icon: string;
  recentWinner?: string;
}

export interface DIALocation {
  name: string;
  address: string;
  area: "East Dearborn" | "West Dearborn";
  description: string;
}

export const SITE_METADATA = {
  name: "Dearborn Community Fund",
  tagline: "Cultivating Vibrant Arts, Culture & Community Connections in Dearborn",
  founded: 2000,
  taxStatus: "501(c)(3) Nonprofit Organization (Tax-Deductible)",
  phone: "313-943-5478",
  email: "ewoodyard@dearborn.gov",
  generalEmail: "communityfund@dearborn.gov",
  address: "15801 Michigan Avenue, Dearborn, MI 48126",
  locationName: "Ford Community & Performing Arts Center (FC&PAC)",
  facebookUrl: "https://www.facebook.com/DearbornCommunityFund",
  missionStatement:
    "The Dearborn Community Fund (DCF) promotes and supports initiatives that enrich the quality of life in Dearborn through creative philanthropic partnerships to the benefit of an empowered community.",
  visionStatement:
    "The Dearborn Community Fund (DCF) is committed to providing opportunities to increase cultural awareness, community engagement and quality of life for all.",
  executiveDirector: "EmmaJean Woodyard",
  programManager: "Sasha Corder",
};

export const STATS = [
  { value: "25+", label: "Years Enriching Dearborn", subtext: "Established in 2000" },
  { value: "400+", label: "Youth Artists Annually", subtext: "Across DPS & HFC" },
  { value: "15+", label: "Public Art Murals", subtext: "POP & Community Installations" },
  { value: "100%", label: "Community Driven", subtext: "501(c)(3) Philanthropic Fund" },
];

export const PROGRAMS: Program[] = [
  {
    id: "pop",
    slug: "pockets-of-perception",
    title: "Pockets of Perception (POP)",
    shortDescription:
      "A flagship apprentice-style student design initiative uniting high school youth from diverse backgrounds to design and install public art across Dearborn.",
    fullDescription:
      "Launched in 2010, 'Pockets of Perception – We Are One Community' (POP) is an intensive apprentice-style summer program. High school students collaborate with professional artist mentors, learning hands-on concept development, client presentation, and large-scale public art fabrication.",
    category: "Youth & Public Art",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240717_104203986.jpg?resize=800%2C450&ssl=1",
    iconName: "Palette",
    highlights: [
      "Encourages multicultural understanding & collaboration among Wayne County students",
      "Apprentice-style training in the business and creative practice of public art",
      "Mentored by renowned artists including Sunshine Durant and Daniel Cascardo",
      "Created landmark murals including the 2024 'Colors of Community' at FC&PAC",
      "Summer term running mid-June through mid-August annually",
    ],
    details: {
      location: "Ford Community & Performing Arts Center Workshop Studio",
      schedule: "Summer: Mid-June to Mid-August",
      targetAudience: "Rising High School Juniors in Wayne County",
      admission: "Free via Application & Interview",
      contact: "communityfund@dearborn.gov",
    },
  },
  {
    id: "youth-arts-festival",
    slug: "youth-arts-festival",
    title: "Youth in Arts Festival",
    shortDescription:
      "Over 400 students from Dearborn Public Schools and Henry Ford College showcase their visual, vocal, instrumental, and theatrical talents at the Ford Center.",
    fullDescription:
      "The Youth Arts Festival is a vibrant celebration co-sponsored with Dearborn Public Schools and Henry Ford College. It features the City-Wide Student Art Show at Padzieski Gallery, instrumental and choral concerts in the Michael A. Guido Theater, and honors ensembles.",
    category: "Education & Performance",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2014/10/America-the-Beautiful-Youth-in-Arts-2016-PM-2.jpg?resize=800%2C450&ssl=1",
    iconName: "Sparkles",
    highlights: [
      "400+ student artists and musicians performing live",
      "Month-long DPS City-Wide Art Show at Padzieski Art Gallery",
      "Performances by Elementary & Secondary Honors Choirs and Blue Fusion",
      "Featured performances by the Maples Arabic Music Ensemble",
      "High School Senior Spotlight presentations highlighting young talent",
    ],
    details: {
      location: "Michael A. Guido Theater & Padzieski Gallery at FC&PAC",
      schedule: "Every April during April Arts Month",
      targetAudience: "DPS & HFC Students, Families & Public",
      admission: "Free Admission",
      contact: "313-943-5478",
    },
  },
  {
    id: "padzieski-gallery",
    slug: "padzieski-art-gallery",
    title: "Padzieski Art Gallery",
    shortDescription:
      "Located in the west wing of FC&PAC, presenting rotating exhibitions from established and emerging artists and fostering public art appreciation.",
    fullDescription:
      "Operated by the Dearborn Community Fund in cooperation with Dearborn Parks & Recreation, the Padzieski Art Gallery exhibits artwork from a diverse spectrum of local, regional, and national artists while hosting interactive receptions and educational talks.",
    category: "Visual Arts & Exhibitions",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/padzieski-art-gallery.jpg?resize=800%2C450&ssl=1",
    iconName: "Frame",
    highlights: [
      "Prime location inside the Ford Community & Performing Arts Center (West Wing)",
      "Rotating curated exhibits featuring contemporary and traditional fine art",
      "Free and open to the public Wednesday through Saturday",
      "Special pre-show gallery hours before Michael A. Guido Theater events",
      "Annual host of the DPS City-Wide Art Show and Senior Spotlight",
    ],
    details: {
      location: "15801 Michigan Ave (West Wing across from Theater)",
      schedule: "Wed–Fri: 12 PM – 6 PM | Sat: 12 PM – 4 PM",
      targetAudience: "All Art Enthusiasts & General Community",
      admission: "Free & Open to All",
      contact: "www.padzieskigallery.org",
    },
  },
  {
    id: "april-arts-month",
    slug: "april-arts-dearborn",
    title: "April Arts Month & Arty Party",
    shortDescription:
      "A month-long cultural explosion featuring the high-energy 'Arty Party' kickoff, Open Studio Hops, Art Stop at the Center, and Mural Way installations.",
    fullDescription:
      "Dearborn's April Arts Month celebrates the creative pulse of our city. Kicking off with the festive 'Arty Party', the month is filled with hands-on craft workshops, mini arts markets, open artist studios, short film screenings, and open-air sidewalk murals.",
    category: "Community Festival",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/03/Orange-Pink-Vibrant-Gradient-80s-Aesthetic-Music-Festival-Banner-1920-x-1080-px.jpg?resize=800%2C450&ssl=1",
    iconName: "PartyPopper",
    highlights: [
      "'Arty Party' family kickoff with live demos, food, performances, and art markets",
      "'Open Studio Hop' allowing the public to tour working artist studios",
      "'Art Stop at the Center' immersive color installations & figure drawing",
      "'Mural Way' outdoor sidewalk gallery along the South side of FC&PAC",
      "Culminates with the prestigious Mayor's Arts Awards",
    ],
    details: {
      location: "Citywide & Ford Community & Performing Arts Center",
      schedule: "Throughout April each year",
      targetAudience: "Community members, families, and creators of all ages",
      admission: "Free general admission; select workshops have nominal fee",
      contact: "313-943-5478",
    },
  },
  {
    id: "dia-inside-out",
    slug: "dia-inside-out",
    title: "DIA Inside/Out Open-Air Gallery",
    shortDescription:
      "In partnership with the Detroit Institute of Arts, high-quality replicas of museum masterpieces are placed across East and West Dearborn downtown districts.",
    fullDescription:
      "Bringing world-class fine art out of the museum and directly into the neighborhoods. Dearborn features 10 curated DIA replicas across bustling public spaces, walkable shopping districts, historic libraries, and civic centers from April through October.",
    category: "Public Art Trail",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/Blue-Were-Open-Retro-Yard-Sign.png?resize=800%2C450&ssl=1",
    iconName: "MapPin",
    highlights: [
      "10 Masterpiece reproductions installed in outdoor pedestrian corridors",
      "5 East Dearborn locations including Blick Art Materials, Habib's Cuisine, Ace Diamond, FC&PAC, Henry Ford Centennial Library",
      "5 West Dearborn locations including Commandant's Quarters, Bryant Library, Wagner Place, Great Commoner",
      "Self-guided walking tours and community scavenger hunts",
      "On display from April through late October",
    ],
    details: {
      location: "East & West Dearborn Downtown Corridors",
      schedule: "April through October",
      targetAudience: "Pedestrians, art walkers, families, and visitors",
      admission: "Free 24/7 Public Display",
      contact: "Dearborn Community Fund & Economic Development",
    },
  },
  {
    id: "community-connections",
    slug: "community-connections",
    title: "Community Connections Broadcasts",
    shortDescription:
      "An inspiring community video series shining a spotlight on local artists, cultural pioneers, and creative programs shaping Dearborn.",
    fullDescription:
      "Produced in collaboration with CDTV, 'Community Connections' captures in-depth interviews, project behind-the-scenes, and discussions with leaders and artists who elevate Dearborn's cultural identity.",
    category: "Media & Outreach",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2023/02/community-connections.jpg?resize=800%2C450&ssl=1",
    iconName: "Video",
    highlights: [
      "High quality video features on CDTV & online streaming",
      "Behind-the-scenes coverage of POP murals and theater productions",
      "Interviews with Mayor's Arts Awards honorees and civic leaders",
      "Available on-demand 24/7 on the CDTV Viebit platform",
    ],
    details: {
      location: "Streaming Online on CDTV Viebit",
      schedule: "On-demand streaming",
      targetAudience: "All residents and supporters of Dearborn culture",
      admission: "Free Online Access",
      contact: "cdtv.viebit.com",
    },
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "pop-recruiting-2026",
    slug: "pop-student-design-team-2026-accepting-applications",
    title: "Pockets of Perception Student Design Team 2026 Accepting Applications",
    date: "February 10, 2026",
    category: "Youth Programs",
    badge: "Applications Open",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/02/Black-White-Brush-Abstract-art-painting-Video-Newsroom-Instagram-Post.png?resize=800%2C500&ssl=1",
    summary:
      "“Pockets of Perception – We Are One Community” (POP), a program of the Dearborn Community Fund, is recruiting new members for the Summer 2026 Design Team. Open to Wayne County high school students entering junior year.",
    content: [
      "“Pockets of Perception – We Are One Community” (POP), a signature program of the Dearborn Community Fund (DCF), is recruiting enthusiastic new student members for the Summer 2026 Design Team.",
      "POP is open to students attending any Wayne County school and entering their junior year in fall 2026. Accepted team members commit to an intensive, highly rewarding three-month project period from mid-June through mid-August.",
      "POP is structured as an apprentice-style program with key core goals:",
      "• Encourage multi-cultural understanding, empathy, and collaborative teamwork.",
      "• Involve young people in creative problem-solving through the public arts.",
      "• Provide hands-on experience in the business side of art creation and community presentation.",
      "• Encourage youth investment and lasting civic pride in our community.",
      "• Create landmark public art that remains part of Dearborn's landscape for generations.",
      "Working closely with qualified team leaders in a workshop studio, students develop original concepts, debate and reach consensus, and execute the final installation.",
      "Deadline for applications is April 17, 2026. Interviews will be scheduled between 10 AM and Noon.",
    ],
  },
  {
    id: "mayors-arts-awards-2026-nominations",
    slug: "2026-mayors-arts-awards-nomination-form",
    title: "2026 Mayor’s Arts Awards Nomination Forms Now Available",
    date: "February 10, 2026",
    category: "Awards & Honors",
    badge: "Nominations Open",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2025/03/Copy-of-MAA_25_Nom-11-x-8.5-in-Medium-Banner-US-Landscape-scaled.png?resize=800%2C500&ssl=1",
    summary:
      "The prestigious 2026 Mayor’s Arts Awards will take place on Monday, May 20, 2026 in Studio A at FC&PAC. Nominations are open for Artist/Performer, Organization, Patron, Arts Educator, and Volunteer categories.",
    content: [
      "The 2026 Mayor’s Arts Awards will be proudly presented at 7:00 PM on Monday, May 20, 2026 in Studio A at the Ford Community & Performing Arts Center.",
      "Since 1988, this ceremony has acknowledged the pivotal contributions made by artists, educators, patrons, and volunteers whose passion invigorates Dearborn's cultural ecosystem.",
      "Nominations are actively invited across five major public categories:",
      "1. Artist Performer Award: Fine arts, literary, or performing artist who has made consistent community impact.",
      "2. Organization Award: Arts group recognized for outstanding contribution to Dearborn arts support.",
      "3. Patron Award: Individuals, businesses, or corporations supporting excellence in the arts.",
      "4. Arts Educator Award: Educator providing exemplary opportunities and inspirational leadership.",
      "5. Volunteer Award: Dedicated volunteer advancing local arts initiatives.",
      "Nomination deadline is March 20, 2026. Submissions may be submitted online or mailed to DCF / Mayor’s Arts Awards, 15801 Michigan Ave, Dearborn, MI 48126.",
    ],
  },
  {
    id: "mayors-arts-awards-2025-celebration",
    slug: "public-invited-to-the-2025-mayors-arts-awards",
    title: "Public Celebrates Dearborn Creators at the 2025 Mayor’s Arts Awards",
    date: "April 11, 2025",
    category: "Awards & Honors",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2025/04/THE-ONE-THING-YOU-HAVE-THAT-NOBODY-ELSE-HAS-IS-YOU-%E2%80%93-YOUR-VOICE-YOUR-MIND-YOUR-STORY-YOUR-VISION.-SO-WRITE-AND-DRAW-AND-BUILD-AND-PLAY-AND-DANCE-AND-LIVE-AS-ONLY-YOU-CAN.-Neil-Gaiman-English.png?resize=800%2C500&ssl=1",
    summary:
      "Community honors Janeen Bodary, Niki Cassidy, Karen Holland, Dearborn Fine Arts Club, Steven & Faye Adelson, Sunshine Durant, and Mayor's Honoree Haroutioun Bastajian.",
    content: [
      "The 2025 Mayor's Arts Awards gathered hundreds of cultural champions in Studio A at the Ford Community & Performing Arts Center.",
      "2025 Award Honorees included:",
      "• Artist/Performer Award: Janeen Bodary",
      "• Art Educator Award: Niki Cassidy",
      "• Volunteer Award: Karen Holland",
      "• Organization Award: Dearborn Fine Arts Club",
      "• Patron Award: Steven & Faye Adelson / Steven Bernard Jewelers",
      "• Special Recognition Award: Sunshine Durant",
      "• 2025 Mayor's Award: Haroutioun Bastajian (Presented by Mayor Abdullah H. Hammoud)",
      "Generous support provided by Dearborn Federal Savings Bank, Ameriprise Financial – Jim Thorpe, CFP, AWMA, and Dearborn Dairy Queen on Greenfield.",
    ],
  },
  {
    id: "pop-mural-2024-dedication",
    slug: "colors-of-community-pop-mural-2024-dedication",
    title: "“Colors of Community” 2024 POP Mural Officially Dedicated",
    date: "July 18, 2024",
    category: "Public Art",
    badge: "Mural Completed",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/IMG_20240717_104203986-1.jpg?resize=800%2C500&ssl=1",
    summary:
      "A stunning new gift to City Recreation created by 15 high school students and directed by artist Sunshine Durant with guest mentor Daniel Cascardo was dedicated at FC&PAC.",
    content: [
      "The Dearborn Community Fund and City of Dearborn proudly dedicated the 2024 POP mural, titled 'Colors of Community', on July 31 at the Ford Community & Performing Arts Center.",
      "The 2024 student design team comprised 15 dedicated area high schoolers: Malak Abdulroda, Amina Bazzi, Kole Catris, Addison Cleveland, Steven Durant, Amanda Eldaw, Camilla Gomez, Lily Martinez, Serena Salameh, Ashe Watson, and Liliana Wilgen.",
      "Assisted by graduate mentors Lauren Boyce, Iliana Sarkisian, Isabela Sierzputowski, and Zeinab Zorkot under Director Sunshine Durant and Guest Mentor Daniel Cascardo.",
      "Funding generous provided by Ford Philanthropy, Paul & Sandy Butler, Exchange Club of Dearborn, Woodyard Family, Rotary Club of Dearborn, and community donors.",
    ],
  },
  {
    id: "mural-way-fcpac",
    slug: "new-at-the-ford-community-performing-arts-center-mural-way",
    title: "New at FC&PAC: “Mural Way” Outdoor Art Walk",
    date: "July 18, 2024",
    category: "Exhibitions",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/07/Blue-Were-Open-Retro-Yard-Sign.png?resize=800%2C500&ssl=1",
    summary:
      "Sidewalks along the south side of the Ford Community & Performing Arts Center are lined with vibrant, colorful murals created for April Arts Month.",
    content: [
      "Visitors to the Ford Community & Performing Arts Center can enjoy 'Mural Way', an outdoor gallery on the south side of the facility.",
      "Featuring large-format outdoor murals celebrating neighborhood heritage, youth expression, and local ecology, the installations remain on public view through autumn.",
    ],
  },
  {
    id: "dps-citywide-art-show",
    slug: "dearborn-public-schools-city-wide-art-show",
    title: "Dearborn Public Schools City-Wide Student Art Show",
    date: "March 6, 2024",
    category: "Youth Programs",
    featuredImage:
      "https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2024/03/DPS_ArtShow_24.gif?resize=800%2C500&ssl=1",
    summary:
      "Featuring hundreds of artworks by elementary, middle, and high school students in Padzieski Art Gallery, including high school 'Senior Spotlight' artist talks.",
    content: [
      "The Padzieski Art Gallery proudly hosts the annual Dearborn Public Schools City-Wide Student Art Show.",
      "Free and open to the community, the exhibit showcases exceptional pieces in watercolor, ceramics, digital photography, pencil sketch, and mixed media.",
      "A hallmark feature of the show is the 'Senior Spotlight' talks where graduating seniors present their artistic portfolios and creative philosophies.",
    ],
  },
];

export const EVENTS: EventItem[] = [
  {
    id: "event-1",
    title: "2026 Mayor's Arts Awards Ceremony & Reception",
    date: "Monday, May 20, 2026",
    time: "7:00 PM EST",
    location: "Studio A, Ford Community & Performing Arts Center",
    category: "Awards",
    description:
      "Annual gala honoring artists, performers, educators, organizations, patrons, and volunteers who contribute to Dearborn's vibrant culture.",
    isFeatured: true,
    actionUrl: "/mayors-arts-awards",
    actionLabel: "Nominate & Details",
  },
  {
    id: "event-2",
    title: "POP 2026 Summer Student Design Team Application Deadline",
    date: "Friday, April 17, 2026",
    time: "11:59 PM EST",
    location: "Online / DCF Offices",
    category: "Student Programs",
    description:
      "Final deadline for Wayne County high school students entering their junior year to apply for the prestigious summer apprentice design team.",
    isFeatured: true,
    actionUrl: "/projects/pockets-of-perception",
    actionLabel: "Apply to POP",
  },
  {
    id: "event-3",
    title: "April Arts Dearborn: “Arty Party” Kick-Off Extravaganza",
    date: "Saturday, April 11, 2026",
    time: "4:00 PM – 8:00 PM",
    location: "Ford Community & Performing Arts Center",
    category: "April Arts",
    description:
      "Free all-ages festival featuring interactive art demos, family crafts, mini arts market, live musical acts, culinary demos, and pop-up exhibitions.",
    isFeatured: true,
    actionUrl: "/projects/april-arts-dearborn",
    actionLabel: "Event Schedule",
  },
  {
    id: "event-4",
    title: "Dearborn Public Schools City-Wide Art Show Opening Reception",
    date: "Wednesday, April 8, 2026",
    time: "4:30 PM – 7:00 PM",
    location: "Padzieski Art Gallery (West Wing FC&PAC)",
    category: "Exhibition",
    description:
      "Opening reception celebrating hundreds of student artworks across elementary to high school, featuring Senior Spotlight talks.",
    isFeatured: false,
    actionUrl: "/projects/padzieski-art-gallery",
    actionLabel: "Gallery Info",
  },
  {
    id: "event-5",
    title: "Open Studio Hop – Tour Dearborn Working Artist Studios",
    date: "Saturday, April 18, 2026",
    time: "1:00 PM – 5:00 PM",
    location: "Various Studios across East & West Dearborn",
    category: "April Arts",
    description:
      "Self-guided tour inviting the public inside the creative workspaces of professional painters, sculptors, and ceramists in Dearborn.",
    isFeatured: false,
    actionUrl: "/projects/april-arts-dearborn",
    actionLabel: "Studio Tour Map",
  },
  {
    id: "event-6",
    title: "DIA Inside/Out Art Walk & Family Exploration Day",
    date: "Saturday, April 25, 2026",
    time: "11:00 AM – 4:00 PM",
    location: "Commandant’s Quarters & Old City Hall / AANM",
    category: "Community",
    description:
      "Celebrate the outdoor installation of 10 Detroit Institute of Arts masterpiece replicas across East and West Dearborn pedestrian corridors.",
    isFeatured: false,
    actionUrl: "/projects/dia-inside-out",
    actionLabel: "Walking Trail",
  },
];

export const DIA_LOCATIONS: DIALocation[] = [
  {
    name: "Blick Art Materials",
    address: "14339 Michigan Avenue",
    area: "East Dearborn",
    description: "Located outside the vibrant art materials hub in historic East Dearborn.",
  },
  {
    name: "Habib's Cuisine",
    address: "14316 Michigan Avenue",
    area: "East Dearborn",
    description: "Installed along the bustling dining district in East Downtown.",
  },
  {
    name: "Ace Diamond Jewelers",
    address: "13840 Michigan Avenue",
    area: "East Dearborn",
    description: "Displaying fine artwork along Michigan Avenue's commercial promenade.",
  },
  {
    name: "Ford Community & Performing Arts Center (West Entrance)",
    address: "15801 Michigan Avenue",
    area: "East Dearborn",
    description: "Welcoming visitors to Dearborn's civic cultural headquarters.",
  },
  {
    name: "Henry Ford Centennial Library (South Entrance)",
    address: "16301 Michigan Avenue",
    area: "East Dearborn",
    description: "Set against the reflective ponds and gardens of Dearborn's central library.",
  },
  {
    name: "Dearborn Historical Museum Commandant’s Quarters",
    address: "21950 Michigan Avenue",
    area: "West Dearborn",
    description: "Installed on the grounds of Michigan's oldest historic masonry building.",
  },
  {
    name: "Bryant Library",
    address: "22100 Michigan Avenue (at Mason)",
    area: "West Dearborn",
    description: "Stationed outside the historic neighborhood branch in the West Downtown area.",
  },
  {
    name: "The Great Commoner / Real Estate One",
    address: "22001 Michigan Avenue",
    area: "West Dearborn",
    description: "Nestled in the vibrant cafe and culinary quarter of West Village.",
  },
  {
    name: "Wagner Place Green Space",
    address: "West Village Dr between Monroe & Mason",
    area: "West Dearborn",
    description: "Positioned next to the modern urban plaza and pedestrian promenade.",
  },
  {
    name: "Blue Fish Asian Cuisine & Directional Pillar",
    address: "West Village Green Corridor",
    area: "West Dearborn",
    description: "Accompanying the active outdoor gathering area in West Dearborn.",
  },
];

export const AWARD_CATEGORIES: AwardCategory[] = [
  {
    title: "Artist / Performer Award",
    description:
      "Presented to an exceptional fine arts, literary, or performing artist from the greater Dearborn community who has consistently demonstrated creative excellence and artistic impact.",
    icon: "Palette",
    recentWinner: "Janeen Bodary (2025)",
  },
  {
    title: "Organization Award",
    description:
      "Awarded to an outstanding arts organization recognized for visionary contributions to the advancement, preservation, and support of the arts in Dearborn.",
    icon: "Building2",
    recentWinner: "Dearborn Fine Arts Club (2025)",
  },
  {
    title: "Patron Award",
    description:
      "Honoring visionary individuals, businesses, or corporations whose generous philanthropic gifts and sponsorship elevate arts programs across Dearborn.",
    icon: "HeartHandshake",
    recentWinner: "Steven & Faye Adelson / Steven Bernard Jewelers (2025)",
  },
  {
    title: "Arts Educator Award",
    description:
      "Recognizing an exceptional arts teacher or academic mentor who provides students with transformative creative education and leads by passionate example.",
    icon: "GraduationCap",
    recentWinner: "Niki Cassidy (2025)",
  },
  {
    title: "Volunteer Award",
    description:
      "Presented to an unsung community champion whose tireless volunteerism, light work, and enthusiasm make arts festivals and events possible.",
    icon: "HandHeart",
    recentWinner: "Karen Holland (2025)",
  },
  {
    title: "Mayor’s Special Award",
    description:
      "Conferred directly by Mayor Abdullah H. Hammoud to an exemplary cultural pioneer whose work brings immense prestige and unity to Dearborn.",
    icon: "Award",
    recentWinner: "Haroutioun Bastajian (2025)",
  },
  {
    title: "Special Recognition Award",
    description:
      "Dedicated to individuals and team leaders who have made long-term, multi-decade structural impacts on public art and community youth mentorship.",
    icon: "Sparkle",
    recentWinner: "Sunshine Durant (2025)",
  },
];

export const DONATION_FUNDS = [
  {
    id: "unrestricted",
    title: "General Unrestricted Fund",
    description: "Used where most critically needed to sustain DCF cultural operations, mini-grants, and arts enrichment.",
    popular: true,
  },
  {
    id: "pop",
    title: "Pockets of Perception (POP) Youth Design Team",
    description: "Supplies high school apprentices with professional art materials, artist mentor stipends, and mural fabrication tools.",
    popular: true,
  },
  {
    id: "youth-in-arts",
    title: "Youth in Arts Festival & DPS Student Art Show",
    description: "Funds theater productions, honors choral clinics, and exhibition frames for over 400 local youth.",
  },
  {
    id: "padzieski",
    title: "Padzieski Art Gallery Exhibitions",
    description: "Supports free public admission, artist honorariums, gallery receptions, and emerging artist showcases.",
  },
  {
    id: "community-grants",
    title: "Community Grants for Dearborn-Based Projects",
    description: "Seed funding for local grassroots cultural initiatives, historical preservation, and public art.",
  },
  {
    id: "parks-playgrounds",
    title: "Parks & Playground Cultural Initiatives",
    description: "Enhances Dearborn municipal parks, outdoor sculpture gardens, and interactive playscapes.",
  },
  {
    id: "theater",
    title: "Michael A. Guido Theater Sponsorships",
    description: "Maintains state-of-the-art stage technology, youth seat subsidies, and Saturday Night Alive fundraisers.",
  },
  {
    id: "chorus",
    title: "Dearborn Community Chorus & Holiday Choral Festival",
    description: "Supports community vocal ensembles, sheet music archives, and holiday seasonal concerts.",
  },
  {
    id: "bike-dearborn",
    title: "Bike Dearborn & Active Recreation",
    description: "Fosters healthy community bicycling tours, public bike repair stations, and recreational outings.",
  },
];

export const SPONSORS = [
  { name: "Ford Philanthropy", tier: "Founding Partner" },
  { name: "City of Dearborn", tier: "Municipal Partner" },
  { name: "Dearborn Federal Savings Bank", tier: "Principal Sponsor" },
  { name: "Ameriprise Financial – Jim Thorpe, CFP, AWMA", tier: "Principal Sponsor" },
  { name: "Paul and Sandy Butler", tier: "Benefactor" },
  { name: "Woodyard Family", tier: "Benefactor" },
  { name: "Rotary Club of Dearborn", tier: "Community Leader" },
  { name: "Exchange Club of Dearborn", tier: "Community Leader" },
  { name: "Blick Art Materials", tier: "Materials Partner" },
  { name: "Dearborn Dairy Queen (Greenfield)", tier: "Community Friend" },
  { name: "Dearborn Public Schools", tier: "Educational Partner" },
  { name: "Henry Ford College", tier: "Educational Partner" },
];

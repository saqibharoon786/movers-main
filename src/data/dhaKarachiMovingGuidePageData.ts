export const dhaOverviewRows = [
  { phase: "Phase 1", status: "Fully developed — oldest", character: "Original scheme, mature trees, established", property: "Bungalows, older apartments" },
  { phase: "Phase 2", status: "Fully developed", character: "Premium residential, wide roads", property: "Bungalows, Phase 2 Ext flats" },
  { phase: "Phase 3", status: "Fully developed", character: "Mix of residential and commercial", property: "Bungalows, Khayaban commercial strip" },
  { phase: "Phase 4", status: "Fully developed", character: "High-value premium bungalows", property: "Large bungalows, executive homes" },
  { phase: "Phase 5", status: "Fully developed", character: "Dense residential + apartments", property: "Street apartments, bungalows" },
  { phase: "Phase 6", status: "Developed + growing", character: "Modern, high demand, rental hub", property: "Bungalows, high-rise towers" },
  { phase: "Phase 7", status: "Partially developed", character: "Active construction, rising star", property: "Bungalows, under-construction" },
  { phase: "Phase 8", status: "Developing rapidly", character: "Newest phase, multiple sub-sectors", property: "Bungalows, apartments, plazas" },
  { phase: "DHA City", status: "Early development", character: "Super Highway corridor, future", property: "Plots, early residential" },
];

export type PhaseGuide = {
  sectionNum: number;
  title: string;
  intro: string[];
  challenges?: { title: string; desc: string }[];
  bullets?: string[];
  rates: { type: string; price: string }[];
  note?: string;
};

export const phaseGuides: PhaseGuide[] = [
  {
    sectionNum: 2,
    title: "Movers in DHA Phase 1 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 1 is the oldest and most established part of DHA Karachi. Originally developed in the 1970s–80s for Pakistan Navy and defence personnel, Phase 1 has a character entirely different from the newer phases — mature trees lining the roads, original-scheme bungalows with classic architecture, and a settled, quiet residential atmosphere that longtime DHA residents prize.",
      "For movers, Phase 1 presents unique challenges that newer phases do not.",
    ],
    challenges: [
      { title: "Narrow Original-Scheme Lanes", desc: "Phase 1's original street widths were designed for traffic volumes of the 1980s. Many inner streets cannot accommodate large full-size moving trucks. Our fleet includes medium-capacity Shehzore trucks (2.5-ton) specifically for Phase 1 inner streets. For larger households, we use a shuttle approach: medium truck collects from the bungalow, transfers to a larger truck parked on a main road." },
      { title: "Mature Tree Canopies", desc: "Phase 1 bungalows typically have large trees in front gardens and on pavements. Tree branches can obstruct truck roof clearance on some streets. Our drivers know Phase 1's specific street-by-street canopy situations — no damaged truck roofs, no snapped branches, no delays caused by tree clearance." },
      { title: "Gate Registration Requirements", desc: "Phase 1 checkpoint registration requires: driver CNIC copy, vehicle registration copy, move date and time. Must be submitted to Phase 1 security management at least 48 hours before move day. Our team handles all Phase 1 gate registration as a standard pre-move task — submitted when you book, not the day before." },
      { title: "Older Building Access", desc: "Many Phase 1 bungalows have original 1980s doorway widths. Large modern wardrobes and king-size bed frames sometimes require careful angling or partial dismantling to navigate doorways. Our team identifies these access challenges during the free home survey — never on move day." },
    ],
    rates: [
      { type: "Within Phase 1 (same area)", price: "PKR 15,000 – 35,000" },
      { type: "Phase 1 to Phase 4 or Phase 6", price: "PKR 20,000 – 55,000" },
      { type: "Phase 1 — 3 Bedroom Bungalow", price: "PKR 35,000 – 60,000" },
      { type: "Phase 1 — 4–5 Bedroom Bungalow", price: "PKR 55,000 – 95,000" },
    ],
  },
  {
    sectionNum: 3,
    title: "Movers in DHA Phase 2 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 2 is among Karachi's most prestigious residential addresses — wide, tree-lined roads, well-maintained infrastructure and a mix of premium bungalows and DHA Phase 2 Extension apartments. Phase 2 includes the iconic Khayaban-e-Seher and Khayaban-e-Ghazi streets and is home to many of Karachi's most senior corporate and government families.",
    ],
    challenges: [
      { title: "Wide Road Access — Best in DHA for Truck Logistics", desc: "Phase 2 main roads accommodate full-size trucks comfortably. This is one of the logistics advantages of Phase 2 — truck access is significantly less constrained than Phase 1 or parts of Phase 5. Our full-size trucks operate in Phase 2 without shuttle requirements in most areas." },
      { title: "Phase 2 Extension — Separate Checkpoint Protocol", desc: "Phase 2 Extension (Phase 2 Ext) has its own security management separate from Phase 2 proper. Gate registration for Phase 2 Ext requires advance submission to the Phase 2 Ext security office — separate from the Phase 2 main gate. Our team knows this distinction and registers for both where moves cross between Phase 2 and Phase 2 Ext." },
      { title: "High-Value Contents — Premium Packing Required", desc: "Phase 2 residences typically contain high-value household goods. Antique furniture, imported electronics, original artwork, marble dining tables and valuable crockery sets are standard in Phase 2 households. Our pre-move survey assesses every high-value item and determines whether standard packing or custom wooden crating is required." },
      { title: "DHA Phase 2 Apartment Blocks", desc: "Several Phase 2 apartment developments have elevator systems — but elevator booking must be coordinated with building management. Our team contacts Phase 2 apartment building management offices 48–72 hours before every move to book the service elevator exclusively for your move window." },
    ],
    rates: [
      { type: "Within Phase 2", price: "PKR 18,000 – 40,000" },
      { type: "Phase 2 to Phase 6 or Phase 8", price: "PKR 22,000 – 60,000" },
      { type: "Phase 2 — 3 Bedroom", price: "PKR 38,000 – 65,000" },
      { type: "Phase 2 — 4–5 Bedroom Villa", price: "PKR 60,000 – 100,000" },
    ],
  },
  {
    sectionNum: 4,
    title: "Movers in DHA Phase 3 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 3 is a diverse phase combining premium residential addresses with one of DHA Karachi's busiest commercial strips — Khayaban-e-Ittehad. Phase 3 residential areas include some of Karachi's most desirable bungalows, while the Khayaban-e-Ittehad commercial zone houses restaurants, boutiques, banks and corporate offices that generate significant office relocation demand.",
    ],
    challenges: [
      { title: "Khayaban Roads — Wide Access With Peak-Hour Restrictions", desc: "Phase 3's Khayaban roads are wide and well-maintained. However, commercial activity on Khayaban-e-Ittehad creates significant peak-hour congestion. Residential moves in Phase 3 near the commercial strip are planned for early morning (before 9 AM) or evening (after 7 PM) to avoid commercial traffic interference with truck loading." },
      { title: "Premium Bungalow Characteristics", desc: "Phase 3 premium bungalows typically have large gardens, covered driveways and side gates. Our team assesses driveway width and gate height during the pre-move survey to determine whether the truck can enter the driveway or must load from the street." },
      { title: "Phase 3 Security Coordination", desc: "Phase 3 security checkpoints have evolved significantly in 2026. Advance vehicle registration via WhatsApp to the Phase 3 security coordinator is now standard — our team manages this submission with vehicle plate, driver CNIC and move date/time for every Phase 3 job." },
      { title: "Phase 3 Commercial Zone — Office Moving", desc: "Khayaban-e-Ittehad commercial strip office moves require specific timing coordination. Truck access on Khayaban-e-Ittehad during business hours (9 AM–7 PM) is restricted for large vehicles. Our Phase 3 office moves execute early morning (6–9 AM) or after hours (8 PM onwards) on weekdays, or standard timing on weekends." },
    ],
    rates: [
      { type: "Phase 3 Residential", price: "PKR 20,000 – 65,000" },
      { type: "Phase 3 to Phase 6", price: "PKR 22,000 – 58,000" },
      { type: "Khayaban Office Move (weekend)", price: "PKR 28,000 – 85,000" },
      { type: "Phase 3 — 4 Bedroom Bungalow", price: "PKR 55,000 – 90,000" },
    ],
  },
  {
    sectionNum: 5,
    title: "Movers in DHA Phase 4 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 4 is widely considered one of DHA Karachi's most prestigious residential addresses — comparable with Clifton Block 4 in terms of property value and resident profile. Phase 4 bungalows are typically larger than earlier phases, with double-storey structures, basement storage rooms and professionally landscaped gardens. Corporate executives, senior government officials and established business families are the primary Phase 4 residents.",
    ],
    challenges: [
      { title: "Largest Average Household Volume in DHA", desc: "Phase 4 homes consistently have the highest per-home volume of household goods among all DHA phases. Double-storey bungalows with fully furnished basements, extensive wardrobes, multiple large TVs, professional kitchen appliances, full dining sets and significant decorative collections mean Phase 4 moves typically require more crew time and truck capacity than equivalent-room-count properties in other phases." },
      { title: "Specialty Item Prevalence", desc: "Phase 4 is where we encounter the highest concentration of specialist items: crystal chandeliers, antique furniture, original oil paintings, imported marble dining tables, baby grand pianos, professional home theatre systems and large aquariums. Our Phase 4 pre-move surveys always include a specialist item assessment — every piece photographed, valued and assigned to appropriate custom wooden crate or specialist handling protocol." },
      { title: "Phase 4 Security — Most Thorough in Older DHA", desc: "Phase 4 security procedures are among the most thorough in the older DHA phases. Driver CNIC, vehicle registration, crew member NICs and move date must all be submitted to Phase 4 security management — in some cases requiring in-person registration at the Phase 4 security office rather than WhatsApp submission. Our team handles all Phase 4 security registration in person where required." },
      { title: "Double-Storey Bungalow Logistics", desc: "Phase 4's double-storey bungalows mean stair carry for all upper-floor furniture. Our Phase 4 crew sizes are larger than standard — typically 6–8 professionals for a 4-bedroom double-storey — to ensure stair carry is done safely at pace, without rushing items down stairways." },
    ],
    rates: [
      { type: "Phase 4 — 3 Bedroom", price: "PKR 45,000 – 75,000" },
      { type: "Phase 4 — 4 Bedroom Double-Storey", price: "PKR 70,000 – 110,000" },
      { type: "Phase 4 — 5+ Bedroom Villa", price: "PKR 90,000 – 140,000" },
      { type: "Phase 4 to Phase 8", price: "PKR 75,000 – 120,000" },
      { type: "Phase 4 — Specialist Items (piano, antiques)", price: "Priced separately at survey" },
    ],
  },
  {
    sectionNum: 6,
    title: "Movers in DHA Phase 5 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 5 is DHA Karachi's most densely populated phase — a diverse mix of traditional bungalows, street apartments, high-rise apartment towers and the thriving commercial corridors of Khayaban-e-Badar and Khayaban-e-Rahat. Phase 5 is also one of the highest-demand phases for moving services — the combination of dense population, significant rental turnover and strong commercial activity generates continuous relocation demand throughout the year.",
    ],
    challenges: [
      { title: "Street Apartment Moving — No Lift, Multiple Floors", desc: "Phase 5's significant stock of 3–5 storey street apartments — most built without elevators — generates the highest volume of stair-carry moving work in all of DHA Karachi. Our Phase 5 crew planning always accounts for stair carry — we bring extra crew members for Phase 5 apartment moves to maintain safe carrying pace without overloading individual crew members." },
      { title: "Phase 5's High-Rise Towers — Elevator Coordination", desc: "Phase 5's newer high-rise developments — Askari Tower, Pearl Tower and several private towers on Khayaban-e-Seher — have service elevators but they are in high demand. Our team books Phase 5 high-rise service elevators minimum 72 hours in advance and confirms the booking the day before move day." },
      { title: "Khayaban Peak-Hour Traffic", desc: "Khayaban-e-Badar and Khayaban-e-Rahat are among Phase 5's busiest arteries. Peak hours (8–10 AM and 5–8 PM) see heavy traffic that can affect truck access timing. Our Phase 5 moves are scheduled to arrive at the loading address outside peak hours where possible." },
      { title: "Phase 5 Rental Market — Month-End Surge", desc: "Phase 5 has one of DHA Karachi's most active rental markets. Month-end (28th–31st of every month) sees a dramatic surge in moving demand as rental agreements expire simultaneously. Phase 5 month-end dates are the fastest-booking slots in our entire Karachi operation. Book Phase 5 moves minimum 14 days in advance — 21 days for month-end dates." },
    ],
    rates: [
      { type: "Phase 5 Street Apartment (2-bed)", price: "PKR 18,000 – 38,000" },
      { type: "Phase 5 Bungalow (3-bed)", price: "PKR 35,000 – 65,000" },
      { type: "Phase 5 High-Rise (3-bed, with lift)", price: "PKR 30,000 – 60,000" },
      { type: "Phase 5 to Phase 6", price: "PKR 20,000 – 55,000" },
      { type: "Phase 5 to Phase 8", price: "PKR 25,000 – 65,000" },
    ],
  },
  {
    sectionNum: 7,
    title: "Movers in DHA Phase 6 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 6 is the rental hub of DHA Karachi in 2026 — and with rental activity comes a continuous, high-volume moving market. Phase 6 is modern, well-planned and rapidly expanding, with wide roads, newer construction and a growing high-rise apartment sector alongside traditional bungalows. Phase 6 is currently our highest-volume DHA phase — we complete more Phase 6 moves per month than any other DHA phase.",
    ],
    challenges: [
      { title: "Fastest-Growing Phase Population", desc: "Phase 6 is absorbing significant inbound migration from other Karachi areas — families moving from Gulshan, North Nazimabad, PECHS and older DHA phases are choosing Phase 6 for its modern infrastructure, newer properties and DHA lifestyle at prices that are still more accessible than Phase 4." },
      { title: "Commercial Boulevard — Bukhari Commercial and Badar Commercial", desc: "Phase 6's commercial zones — Bukhari Commercial, Badar Commercial and Rahat Commercial — house hundreds of businesses. Office relocations within Phase 6 and between Phase 6 and other Karachi areas are a significant part of our Phase 6 operation." },
      { title: "Phase 6 Security — Well-Organised and Consistent", desc: "Phase 6 has Karachi's most organised DHA security protocol for moving trucks in 2026. A dedicated portal exists for contractor and mover registration — our team creates a registered mover profile for Phase 6, allowing same-day access registration for urgent moves (unlike older phases that require 48+ hours)." },
      { title: "Phase 6 High-Rise — Elevator Sophistication", desc: "Phase 6's apartment towers are newer and better-equipped than older DHA phases. Many have two service elevators — significantly reducing elevator bottleneck risk. Building management in Phase 6 towers is also more responsive to advance booking requests." },
      { title: "Cross-City Phase 6 Moves — The Biggest Volume", desc: "The most common move involving Phase 6 in 2026 is cross-city: families relocating from non-DHA Karachi to Phase 6. Gulshan-e-Iqbal to Phase 6, North Nazimabad to Phase 6, PECHS to Phase 6 and North Karachi to Phase 6 are all high-volume routes. Our cross-city fleet coordinates these moves with GPS tracking throughout the cross-Karachi journey." },
    ],
    rates: [
      { type: "Within Phase 6", price: "PKR 15,000 – 45,000" },
      { type: "Gulshan to Phase 6", price: "PKR 22,000 – 55,000" },
      { type: "North Nazimabad to Phase 6", price: "PKR 25,000 – 60,000" },
      { type: "PECHS to Phase 6", price: "PKR 20,000 – 55,000" },
      { type: "Phase 6 — 3 Bedroom", price: "PKR 35,000 – 65,000" },
      { type: "Phase 6 — 4–5 Bedroom", price: "PKR 60,000 – 100,000" },
      { type: "Phase 6 Office (Bukhari Commercial)", price: "PKR 28,000 – 90,000" },
    ],
  },
  {
    sectionNum: 8,
    title: "Movers in DHA Phase 7 Karachi — Complete Guide 2026",
    intro: [
      "Phase 7 is the rising star of DHA Karachi in 2026 — mid-development with strong appreciation. Phase 7 is where Karachi's growing professional class is buying first homes and where investors are building for sale and rental. Moving activity in Phase 7 is heavily inbound — families moving in from other Karachi areas — with relatively less within-phase movement due to the still-developing nature of much of the phase.",
    ],
    challenges: [
      { title: "Active Construction Throughout Phase 7", desc: "Phase 7 is still under significant construction in 2026. Roads that are shown on maps but are not yet fully surfaced, construction vehicle traffic that blocks residential streets, dust and debris that requires extra protection for furniture and fragile items during loading. Before every Phase 7 move, our project coordinator calls the Phase 7 development office and our driver to identify current construction blockages. Alternative truck routing is planned during the pre-move survey — not improvised on move day." },
      { title: "Phase 7 Road Quality — Variable by Sub-Sector", desc: "Phase 7 road quality varies significantly between sub-sectors. The main Phase 7 entry road and primary residential streets in developed sub-sectors are good. Inner streets in partially developed areas may be unpaved. Our trucks carry traction boards and basic recovery equipment for Phase 7 moves as standard." },
      { title: "Phase 7 Gate Registration — Stricter Than Phase 6", desc: "Phase 7 security management is more stringent than Phase 6. Mover registration requires submission of vehicle documents, crew NICs and move authorization letter minimum 72 hours before move day. Our Phase 7 security paperwork is submitted within 24 hours of booking confirmation — never left to the last minute." },
    ],
    rates: [
      { type: "Any Karachi Area to Phase 7", price: "PKR 22,000 – 65,000" },
      { type: "Phase 7 — 3 Bedroom", price: "PKR 38,000 – 68,000" },
      { type: "Phase 7 — 4–5 Bedroom", price: "PKR 62,000 – 105,000" },
      { type: "Phase 7 to Phase 6 or Phase 8", price: "PKR 18,000 – 50,000" },
    ],
  },
  {
    sectionNum: 9,
    title: "Movers in DHA Phase 8 Karachi — Complete Guide 2026",
    intro: [
      "DHA Phase 8 is the newest, largest and most expansive DHA phase — and in 2026 it is the single most active moving destination in all of DHA Karachi. Phase 8 is the ROI engine of DHA Karachi in 2026 — attracting first-time DHA buyers, investors and families relocating from across Karachi. Phase 8 has multiple distinct sub-sectors: Al-Murtaza, Ittehad, Khayaban-e-Ittehad Extension, Creek Vista, Tauheed and others — each with its own access characteristics.",
    ],
    bullets: [
      "Al-Murtaza Commercial: Phase 8's primary business corridor — office relocations require commercial vehicle access coordination and advance coordination with Phase 8 commercial management.",
      "Creek Vista: High-rise residential development with modern elevator systems — service lift bookings confirmed in writing from building management before move date is locked.",
      "Tauheed Commercial and Sehar Commercial: Expanding rapidly in 2026 — commercial vehicle access follows specific approved vehicle lists maintained with Phase 8 management.",
    ],
    challenges: [
      { title: "Phase 8 Security — Most Thorough in DHA 2026", desc: "Requirements include vehicle registration document (original + photocopy), driver CNIC (original + photocopy), all crew member CNIC photocopies, property owner/tenant authorization letter signed by the DHA Phase 8 property owner, and move date/time window. Submission must be made at least 72 hours before move day. Best International Movers is a registered mover with Phase 8 security management — our registration allows WhatsApp submission on behalf of every Phase 8 client." },
    ],
    rates: [
      { type: "Within Phase 8", price: "PKR 18,000 – 48,000" },
      { type: "Any Karachi to Phase 8", price: "PKR 25,000 – 75,000" },
      { type: "Phase 8 — 3 Bedroom", price: "PKR 40,000 – 70,000" },
      { type: "Phase 8 — 4–5 Bedroom", price: "PKR 65,000 – 110,000" },
      { type: "Creek Vista High-Rise", price: "PKR 35,000 – 75,000" },
      { type: "Phase 8 Commercial Office", price: "PKR 30,000 – 100,000+" },
    ],
  },
];

export const dhaCityGuide = {
  sectionNum: 10,
  title: "Movers for DHA City Karachi — 2026 Guide",
  intro: [
    "DHA City Karachi is no longer selling potential — it is demonstrating delivery. Roads are ready, sectors are ready, and living is increasingly possible. DHA City is the long-term speculative play on the CPEC and Super Highway corridor. Moving activity in DHA City Karachi is primarily inbound — families taking possession of newly constructed homes and investors completing buildings for sale or rental.",
    "DHA City is located on the M9 Motorway/Super Highway, approximately 40–50 km from central Karachi, which creates specific logistics considerations.",
  ],
  considerations: [
    { title: "Distance from Central Karachi — Transport Cost Premium", desc: "DHA City's distance from central Karachi means intercity-equivalent transport costs for moves between DHA City and other Karachi areas. Our DHA City moves include fuel, driver time and vehicle wear appropriate to the distance — quoted transparently in the written pre-move quote." },
    { title: "DHA City Developing Infrastructure", desc: "Road quality within DHA City's developing sectors varies significantly. Our DHA City moves include advance route assessment — our project coordinator contacts the DHA City management office to confirm road conditions in your specific sector before committing to a move date." },
    { title: "Long-Distance Furniture Protection", desc: "The 45–50 km road journey from central Karachi to DHA City means furniture and fragile items spend more time on the road than a typical Karachi cross-city move. We apply additional stretch wrap and box sealing for DHA City moves — ensuring that road vibration over the extended journey does not shift or damage packed items." },
  ],
  rates: [
    { type: "Any Karachi to DHA City", price: "PKR 35,000 – 80,000" },
    { type: "DHA City — 3 Bedroom", price: "PKR 45,000 – 75,000" },
    { type: "DHA City — 4–5 Bedroom", price: "PKR 70,000 – 115,000" },
    { type: "DHA City to Central Karachi", price: "PKR 35,000 – 80,000" },
  ],
};

export const floorSurcharges = [
  { floor: "1st Floor", surcharge: "PKR 2,000" },
  { floor: "2nd Floor", surcharge: "PKR 4,000" },
  { floor: "3rd Floor", surcharge: "PKR 7,000" },
  { floor: "4th Floor+", surcharge: "PKR 10,000+" },
];

export const commercialZones = [
  { zone: "Khayaban-e-Ittehad Strip", phase: "Phase 3 & 5", timing: "Early morning or weekend", notes: "Commercial vehicle timing rules" },
  { zone: "Khayaban-e-Badar", phase: "Phase 5", timing: "Weekend preferred", notes: "Peak-hour restrictions" },
  { zone: "Khayaban-e-Rahat", phase: "Phase 5 & 6", timing: "Flexible — good access", notes: "Pre-coordinate with security" },
  { zone: "Bukhari Commercial", phase: "Phase 6", timing: "Weekend or early morning", notes: "Phase 6 commercial registration" },
  { zone: "Badar Commercial", phase: "Phase 5", timing: "Early morning preferred", notes: "Traffic peak considerations" },
  { zone: "Rahat Commercial", phase: "Phase 6", timing: "Flexible", notes: "Modern access, good roads" },
  { zone: "Sehar Commercial", phase: "Phase 7", timing: "Weekend preferred", notes: "Construction zone awareness" },
  { zone: "Creek Vista Commercial", phase: "Phase 8", timing: "Weekend standard", notes: "Phase 8 security registration" },
  { zone: "Al-Murtaza Commercial", phase: "Phase 8", timing: "Advance coordination required", notes: "Commercial lane designations" },
  { zone: "DHA Tecno City", phase: "Phase 2 Ext", timing: "Flexible — good access", notes: "IT company specialist packing" },
];

export const internationalRoutes = [
  { dest: "DHA to Dubai, UAE", method: "Sea LCL/FCL", transit: "10–15 days", from: "From USD 450" },
  { dest: "DHA to Riyadh, KSA", method: "Sea LCL/FCL", transit: "12–18 days", from: "From USD 380" },
  { dest: "DHA to London, UK", method: "Sea FCL", transit: "22–28 days", from: "From USD 850" },
  { dest: "DHA to Toronto, Canada", method: "Sea FCL", transit: "35–42 days", from: "From USD 1,100" },
  { dest: "DHA to Sydney, Australia", method: "Sea FCL", transit: "18–25 days", from: "From USD 950" },
  { dest: "DHA to Doha, Qatar", method: "Sea LCL/FCL", transit: "12–16 days", from: "From USD 400" },
];

export const internationalSteps = [
  "Professional packing at your DHA bungalow or apartment using export-standard materials — double-wall cartons, industrial bubble wrap, custom wooden crates — rated for 10–45 day ocean voyages.",
  "Export customs documentation — packing list, WeBOC export declaration, bill of lading — prepared by our in-house licensed customs team.",
  "Sea freight container booking from Karachi Port — FCL (Full Container Load) for large DHA households, LCL (Less than Container Load) for smaller volumes.",
  "Ocean transit with real-time container tracking — WhatsApp updates at Karachi Port departure and destination port arrival.",
  "Destination customs clearance and door delivery — our destination agent network covers 100+ countries.",
];

export const serviceIncludes = [
  { service: "Free Home Survey at DHA Address", deliver: "Survey within 24 hours — written quote, no obligation" },
  { service: "DHA Gate Security Registration", deliver: "Registered mover — we handle all phase security submissions" },
  { service: "Export-Grade Packing", deliver: "Double-wall cartons, bubble wrap, custom wooden crates" },
  { service: "High-Value Item Specialist Packing", deliver: "Antiques, chandeliers, marble, pianos — custom crated" },
  { service: "Furniture Dismantling + Reassembly", deliver: "All furniture taken apart and rebuilt at new DHA address" },
  { service: "GPS-Tracked Fleet", deliver: "Real-time tracking throughout DHA and cross-city" },
  { service: "Phase-Specific Truck Sizing", deliver: "Right size truck for every DHA lane width" },
  { service: "Full Transit Insurance", deliver: "Complete replacement value coverage on every move" },
  { service: "Same-Day DHA Service", deliver: "Available — call before 10 AM, confirm within 30 minutes" },
  { service: "Weekend Service", deliver: "Friday–Sunday — available all DHA phases" },
  { service: "Storage Between DHA Homes", deliver: "Climate-controlled secure storage in Karachi" },
  { service: "International Connection", deliver: "DHA to worldwide — Karachi Port sea freight" },
  { service: "Written Quote = Final Invoice", deliver: "Not one rupee more — ever" },
];

export const dhaTestimonials = [
  {
    quote: "Moved from DHA Phase 1 to Phase 8 Al-Murtaza in May 2026. Best International Movers navigated the Phase 1 narrow lanes perfectly with a medium truck, and their team had already completed the Phase 8 security registration before move day — truck entered without a single minute's delay. Our 5-bedroom household including antique furniture was packed beautifully. Exceptional service.",
    name: "Nadia Hussain",
    route: "DHA Phase 1 → Phase 8 | May 2026",
  },
  {
    quote: "Phase 5 apartment move — 4th floor, no lift. I was dreading it. Best International Movers brought extra crew specifically for the stair carry, completed the 3-bedroom move in 6 hours and nothing was dropped or damaged. Price exactly as quoted. The most professional movers in DHA Karachi.",
    name: "Tariq Mehmood",
    route: "DHA Phase 5 → Phase 6 | April 2026",
  },
  {
    quote: "Office relocation from Bukhari Commercial Phase 6 to Khayaban-e-Ittehad Phase 3 — they timed the Phase 3 truck entry for early morning, 20 workstations moved over the weekend, fully operational Monday morning. Their knowledge of DHA commercial zone access timing saved our entire move day.",
    name: "Hassan Rauf",
    route: "DHA Phase 6 → Phase 3 Office | March 2026",
  },
  {
    quote: "DHA Phase 6 to Toronto Canada. Best International Movers packed our 4-bedroom Phase 6 home in export crates, handled WeBOC customs, Karachi Port loading and our container arrived in Toronto in 40 days. Every item perfect. The best DHA Karachi international moving company without question.",
    name: "Zara Khan",
    route: "DHA Phase 6 → Toronto, Canada | February 2026",
  },
];

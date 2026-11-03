export interface Campaign {
  id: string
  title: string
  category: 'nutrition' | 'education' | 'healthcare' | 'emergency'
  raised: number
  goal: number
  donorsCount: number
  daysLeft: number
  status: 'active' | 'urgent' | 'completed'
  image: string
  summary: string
  beneficiaryTarget: string
  sdgGoal: string
  location: string
  updatesCount: number
}

export interface FieldDispatch {
  id: string
  title: string
  timestamp: string
  location: string
  coordinates: string
  coordinator: string
  category: 'Relief Distribution' | 'Medical Outreach' | 'Educational Aid' | 'Emergency'
  status: 'Verified Complete' | 'In Progress' | 'Scheduled'
  metric: string
  summary: string
  image: string
}

export interface VolunteerShift {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  slotsTotal: number
  slotsFilled: number
  lead: string
  requirements: string[]
}

export interface FinancialMetric {
  category: string
  amount: number
  percentage: number
  color: string
}

/* ─────────────────────────────────────────────────────────────
   LIVE CAMPAIGNS DATA
───────────────────────────────────────────────────────────── */
export const CAMPAIGNS: Campaign[] = [
  {
    id: 'ramadan-ration-2026',
    title: 'Ramadan Community Nutrition & Ration Lifeline 2026',
    category: 'nutrition',
    raised: 1845000,
    goal: 2500000,
    donorsCount: 428,
    daysLeft: 12,
    status: 'urgent',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop',
    summary: 'Distributing month-long nutritional ration packs containing rice, pulses, cooking oil, flour, and dates to 1,200 ultra-poor families across Mandvi and Govandi.',
    beneficiaryTarget: '1,200 Families',
    sdgGoal: 'SDG 2: Zero Hunger',
    location: 'Mandvi, South Mumbai',
    updatesCount: 7,
  },
  {
    id: 'digital-school-lab',
    title: 'A.R. Siddique English School IT & Digital Lab Expansion',
    category: 'education',
    raised: 820000,
    goal: 1000000,
    donorsCount: 194,
    daysLeft: 24,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    summary: 'Equipping 35 modern workstation terminals with coding software, high-speed fiber internet, and interactive STEM learning kits for slum students.',
    beneficiaryTarget: '500+ Students',
    sdgGoal: 'SDG 4: Quality Education',
    location: 'Bandra West, Mumbai',
    updatesCount: 4,
  },
  {
    id: 'mobile-health-clinic',
    title: 'Mobile Preventive Healthcare & Diagnostics Van',
    category: 'healthcare',
    raised: 1450000,
    goal: 2000000,
    donorsCount: 312,
    daysLeft: 18,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    summary: 'Deploying weekly specialized doctor consultations, sugar/BP diagnostics, ECG testing, and essential chronic illness medicines directly into slum pockets.',
    beneficiaryTarget: '3,000+ Screenings',
    sdgGoal: 'SDG 3: Good Health',
    location: 'Slum Clusters across Mumbai',
    updatesCount: 5,
  },
  {
    id: 'orphan-higher-education',
    title: 'Orphan Higher Education & Vocational Career Fund',
    category: 'education',
    raised: 680000,
    goal: 750000,
    donorsCount: 167,
    daysLeft: 9,
    status: 'urgent',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop',
    summary: 'Direct junior college tuition, exam fees, uniform allowances, and mentorship stipends for 85 orphaned scholars pursuing commerce and sciences.',
    beneficiaryTarget: '85 Scholars',
    sdgGoal: 'SDG 10: Reduced Inequalities',
    location: 'Al Aqdas Junior College',
    updatesCount: 6,
  },
  {
    id: 'emergency-relief-reserve',
    title: 'Monsoon Flood & Emergency Disaster Contingency Fund',
    category: 'emergency',
    raised: 1120000,
    goal: 1500000,
    donorsCount: 220,
    daysLeft: 30,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop',
    summary: 'Pre-stocking high-capacity dry food, potable water filtration tablets, tarpaulins, and first-aid kits for rapid deployment during urban crises.',
    beneficiaryTarget: '2,500 Emergency Kits',
    sdgGoal: 'SDG 11: Sustainable Communities',
    location: 'Central Relief Logistics Hub',
    updatesCount: 3,
  },
]

/* ─────────────────────────────────────────────────────────────
   FIELD DISPATCHES / TELEMETRY LOG
───────────────────────────────────────────────────────────── */
export const FIELD_DISPATCHES: FieldDispatch[] = [
  {
    id: 'disp-2026-042',
    title: 'Bimonthly Ration Kit Distribution Completed',
    timestamp: '2 hours ago · 11:30 AM IST',
    location: 'Mandvi Central Distribution Depot',
    coordinates: '18.9553° N, 72.8364° E',
    coordinator: 'Mohammed Hasham Shaikh (Secretary)',
    category: 'Relief Distribution',
    status: 'Verified Complete',
    metric: '320 Ration Bags Handed Over',
    summary: 'All 320 pre-registered destitute single-mother families received 25kg dry ration packages with biometric/ID verification logged on ground.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop',
  },
  {
    id: 'disp-2026-041',
    title: 'Free Diabetic & Cardiac Camp Screening',
    timestamp: 'Yesterday · 4:15 PM IST',
    location: 'Bandra Municipal School Compound',
    coordinates: '19.0596° N, 72.8295° E',
    coordinator: 'Dr. Zeeshan Ansari & Medical Volunteers',
    category: 'Medical Outreach',
    status: 'Verified Complete',
    metric: '184 Patients Screened · 92 Free Meds Issued',
    summary: 'General physician consults, random blood sugar tests, hypertension evaluations, and 30-day free supply of cardiac/antidiabetic drugs delivered.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },
  {
    id: 'disp-2026-040',
    title: 'Terminal Setup in A.R. Siddique Computer Lab',
    timestamp: '2 days ago',
    location: 'A.R. Siddique English High School',
    coordinates: '19.0544° N, 72.8402° E',
    coordinator: 'Mr. Zeeya M. Shaikh',
    category: 'Educational Aid',
    status: 'Verified Complete',
    metric: '15 High-Spec PCs Configured',
    summary: 'New coding workstations installed with Python, Scratch, and office software environments to train batch 2026-27 youth scholars.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
  {
    id: 'disp-2026-039',
    title: 'Daily Community Kitchen Warm Food Drive',
    timestamp: 'Active Operation · Ongoing',
    location: 'Dongri / Mandvi Relief Base',
    coordinates: '18.9582° N, 72.8391° E',
    coordinator: 'Mr. Abrar Shaikhdare',
    category: 'Relief Distribution',
    status: 'In Progress',
    metric: '350 Fresh Meals Cooked Daily',
    summary: 'Freshly prepared nutritious khichdi and vegetable meals served to daily wage earners, elderly destitutes, and pavement dwellers.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
  },
]

/* ─────────────────────────────────────────────────────────────
   AUDITED FINANCIAL ALLOCATION DATA
───────────────────────────────────────────────────────────── */
export const AUDITED_ALLOCATION: FinancialMetric[] = [
  { category: 'Direct Humanitarian Programs', amount: 89.2, percentage: 89.2, color: '#059669' },
  { category: 'Field Logistics, Storage & Delivery', amount: 5.8, percentage: 5.8, color: '#0284c7' },
  { category: 'Statutory Compliance & Operations', amount: 3.2, percentage: 3.2, color: '#d97706' },
  { category: 'Audit, Security & Platform Reserves', amount: 1.8, percentage: 1.8, color: '#64748b' },
]

export const QUARTERLY_AID_DEPLOYMENT = [
  { quarter: 'Q1 2025', food: 18.5, medical: 6.2, education: 8.4 },
  { quarter: 'Q2 2025', food: 22.1, medical: 7.8, education: 9.1 },
  { quarter: 'Q3 2025', food: 24.3, medical: 8.5, education: 11.2 },
  { quarter: 'Q4 2025', food: 29.8, medical: 10.2, education: 13.5 },
  { quarter: 'Q1 2026', food: 34.2, medical: 12.0, education: 15.8 },
]

/* ─────────────────────────────────────────────────────────────
   VOLUNTEER SHIFTS
───────────────────────────────────────────────────────────── */
export const UPCOMING_SHIFTS: VolunteerShift[] = [
  {
    id: 'shift-101',
    title: 'Saturday Community Food Packaging & Sorting',
    date: 'Upcoming Saturday',
    time: '09:00 AM – 01:00 PM',
    location: 'Mandvi Central Logistics Warehouse',
    category: 'Relief Logistics',
    slotsTotal: 25,
    slotsFilled: 19,
    lead: 'Mr. Abrar Shaikhdare',
    requirements: ['Comfortable lifting', 'Minimum 16 yrs', 'Punctuality'],
  },
  {
    id: 'shift-102',
    title: 'Medical Camp Patient Triage & Vitals Registration',
    date: '2nd Sunday of the Month',
    time: '08:30 AM – 02:00 PM',
    location: 'Bandra Municipal Urdu School No. 1',
    category: 'Healthcare Camp',
    slotsTotal: 12,
    slotsFilled: 9,
    lead: 'Dr. Zeeshan Ansari',
    requirements: ['Medical/Nursing/Bio background preferred', 'Good communication'],
  },
  {
    id: 'shift-103',
    title: 'Weekend Digital Literacy & Math Mentorship',
    date: 'Every Sunday',
    time: '10:30 AM – 12:30 PM',
    location: 'Al Aqdas Computer Centre, Bandra',
    category: 'Education Mentorship',
    slotsTotal: 15,
    slotsFilled: 11,
    lead: 'Mrs. Kaneez Fatima',
    requirements: ['Basic computer proficiency', 'Patience with youth students'],
  },
]

/* ─────────────────────────────────────────────────────────────
   INSTITUTIONAL TRUST & REGISTRATION METRICS
───────────────────────────────────────────────────────────── */
export const STATUTORY_CREDENTIALS = {
  ngoName: 'Al Aqdas Welfare Association',
  registrationNo: 'F-46725 / Mumbai (Regd. Under Bombay Public Trust Act 1950)',
  darpanId: 'MH/2015/009124 (NITI Aayog, Govt. of India)',
  taxExemption: '80G Approved (Unique Regn. AAETA8194EF20214)',
  pan: 'AAETA8194E',
  statutoryAuditor: 'M/s S. K. Lodha & Associates, Chartered Accountants',
  bankName: 'Axis Bank Ltd',
  branch: 'Mandvi, Mumbai',
  accountNo: '921010045812934',
  ifsc: 'UTIB0000045',
  upiVpa: 'mab.037326002330038@axisbank',
  merchantId: '037326002330038',
  terminalId: '85979842',
}

